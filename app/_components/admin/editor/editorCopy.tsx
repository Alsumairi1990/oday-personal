<template>
        <div class="article-content w-full mx-auto  h-full border-x border-y border-x-gray-300 border-y-gray-300 ">
            
                <EditorButtons 
                :editor="editor" 
                :showTOC="showTOC" 
                @toggle-image-upload="toggleImageUploadModal"
                @toggle-toc="toggleTOC" 
                @toggle-preview="previewEditor"
                @toggle-editor="editorVisible"
                @toggle-article="saveArticle"
                />

                <Model
                  v-if="isImageUploadModalOpen"
                  @close-modal="closeImageUploadModal"
                  @insert-image="insertImage"
                  @update-image="updateImage"
                  
                />
                  <floating-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor && floating">
                    <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                      H1
                    </button>
                    <button type="button"  @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                      H2
                    </button>
                    <button type="button" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                      Bullet List
                    </button>
                  </floating-menu>
                 <!-- <TOC v-if="showTOC" :tocEntries="tocEntries" /> -->
                 <div v-if="!preview" class="overflow-y-auto">
                    <editor-content :editor="editor" class="w-full overflow-y-auto h-full bg-white"/>
                 </div>
              <div v-if="preview" class="fixed top-0 left-0 bg-white w-full h-full z-40">
                    <div class="py-1 bg-[#138eb3] flex items-center ">
                          <div class="pl-2">
                              <i class="fa fa-drivers-license-o mr-2 text-gray-100 text-base"></i>
                              <span class="text-white text-md">Editor Prview</span>
                          </div>
                          <div class="ml-auto p-2">
                              <span class="bg-white rounded px-2 py-1 cursor-pointer" @click="previewEditor">
                                  <i class="fa fa-window-close text-gray-600 text-base" aria-hidden="true"></i>
                              </span>
                          </div>
                      </div>
                      <!-- <editor-content :editor="editor" /> -->
                      <div class="whitespace-pre-line"  >{{generatedHtml}}</div>

                </div>
          </div>
</template>
<script>
import { Editor, EditorContent , FloatingMenu } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Heading } from '@tiptap/extension-heading';
import { Paragraph } from '@tiptap/extension-paragraph';
import {ListItem  }  from '@tiptap/extension-list-item';
import { BulletList } from "@tiptap/extension-bullet-list";
import OrderedList from '@tiptap/extension-ordered-list'
import Document from '@tiptap/extension-document';
import { mergeAttributes } from '@tiptap/core'
import Blockquote from '@tiptap/extension-blockquote'
import Text from '@tiptap/extension-text'
import Underline from '@tiptap/extension-underline'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import FontFamily from '@tiptap/extension-font-family'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TOC from './TOC';
import FontSize  from './FontSize.js'; 
import EditorButtons from './EditorButtons.vue';
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import TOCNode from './TOCNode';
import store from './store';
import HardBreak from '@tiptap/extension-hard-break'
import TextAlign from '@tiptap/extension-text-align'
import Subscript from '@tiptap/extension-subscript'
import CodeBlock from '@tiptap/extension-code-block'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Link from '@tiptap/extension-link'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Superscript from '@tiptap/extension-superscript'
import { Image as TiptapImage } from '@tiptap/extension-image';
import Indent from './IndentNode.js';
import Tweet from './Tweet.js';
import Youtube from '@tiptap/extension-youtube'
import Frame from './FrameEx.js';
import ImageAlign  from "./ImageAlign.js";


// import tiptapHtml from '@tiptap/html';
import { generateHTML } from '@tiptap/html';
import axios from 'axios';



import Model from './Model.vue';

export default {
  name:"TextEditor",
    components: {
    EditorContent,
    EditorButtons,
    FloatingMenu,
    TOC,
    Model,
    TiptapImage

  },
    props:{
            model:{
                type: String,
                required : true
            },
            column: {
                type: String,
                required: true,
            },
            id:{
                type:Number,
                required: true
            }
        },
     mounted(){
      this.editor = new Editor({
      content: '',
      editable: this.editable,
      extensions: [
        StarterKit,
        TiptapImage,
        Placeholder.configure({
          emptyEditorClass: 'is-editor-empty',
            placeholder: 'My Custom Placeholder',
        }),
        Heading.extend({
         addAttributes() {
          return {
            "id": {
              default: null
            },
          }
        },
        
          renderHTML({ HTMLAttributes, node  }) {
            var { level , id} = node.attrs;
            level = level + 1;
            store.commit('incrementFlag');
            // id= 55;
            const y = 9;
            node.attrs.id = store.getters.getCount;
            
            store.commit('setHedings', level+3);
            
            return [`h${level}`, mergeAttributes(HTMLAttributes, { id:  node.attrs.id }), 0];
          },
        }),
        Paragraph,
        BulletList.configure({
          itemTypeName: 'listItem',
          keepMarks: true,
          keepAttributes: true,
          
        }),
        ListItem,
        Document,
        Text,
        TOCNode,
        Underline,
        Color,
        TextStyle,
        Highlight.configure({ multicolor: true }),
        FontSize,
        FontFamily,
        TextAlign.configure({
              types: ['heading', 'paragraph','image'],
            }),
        Subscript,
        Superscript,
        Blockquote,
        HorizontalRule,
        HardBreak,
        Link.configure({
          openOnClick: false,
        }),
        CodeBlock,
        TaskItem,
        OrderedList,
        TaskList,
        Indent,
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        generateHTML,
        Tweet,
        Youtube.configure({
          controls: false,
        }),
        Frame,
        ImageAlign
        
      ],
      // watch: {
      //     editable() {
      //       this.editor.setEditable(this.editable)
      //     },
      //   },
      
       editorProps: {
        attributes: {
          class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none border-x-0 p-4 border-y-0  focus:outline-none',
        },
      },
    });

    // this.editor.on("update", () => {
    //   this.onEditorUpdate();
    // });
     },
      
    data(){
        return{
        editor:null,showTOC: false,
        tocEntries: [],
        headingIds:['g'],
        contentHM:null,
        initialContent :'',
        flag:0,
        isImageUploadModalOpen: false,
        floating:false,
        preview:false,
        editable:true,
        generatedHtml:null
        }
    },
     
       computed:{  
          },
  
    methods:{
      saveArticle(){
          const data = new FormData();
          data.append('model', this.model);
          data.append('column', this.column);
          data.append('id', this.id);
          data.append('content', this.editor.getHTML());
          axios.post('/admin/education-article/add-model', data);
      },
      editorVisible(){
        this.$emit('show-editor');
      },
      sourceCode(){
         this.generatedHtml = generateHTML(this.editor.content);
      },
       previewEditor(){
            
        if(this.preview){
          this.preview = false;
          this.editable = true;
          this.editor.setEditable(this.editable) 
          }
        else { this.preview = true;
        // this.editor.commands.setContent("<p>rfrgt</p>");
        this.generatedHtml = this.editor.getHTML()
        alert(this.generatedHtml);
            this.editable = false;
            
            this.editor.setEditable(this.editable) 
            
            }

    },
      toggleImageUploadModal() {
      this.isImageUploadModalOpen = !this.isImageUploadModalOpen;
    },
    closeImageUploadModal(){
       this.isImageUploadModalOpen = false;
    },
    openImageUploadModal() {
      this.isImageUploadModalOpen = true;
    },
    
    insertImage(imageNm) {
      const { schema } = this.editor.state;
        this.uploadImage(imageNm).then((response) => {
        const node = schema.nodes.image.create({ src: response.data }); // creates the image element
        const transaction = this.editor.state.tr.insert(this.editor.view.state.selection.from, node); // places it in the correct position
        this.editor.view.dispatch(transaction);
  });
      
    },
    uploadImage(imageName){
           alert('file come from '+ imageName);
                    const data = new FormData();
                    data.append('file', imageName);
                  return axios.post('/documents/image/upload', data);
    },
    updateImage(imagFile){
      alert('imagFile' + imagFile)
        this.uploadImage(imagFile).then((response) => {
            alert('coming from server' + response.data);
            const node = schema.nodes.image.create({ src: response.data }); // creates the image element
            const transaction = this.editor.state.tr.insert(this.editor.view.state.selection.from, node); // places it in the correct position
            this.editor.view.dispatch(transaction);
          });
    },
 


        toggleTOC() {
          alert('toc-togle')
      this.showTOC = !this.showTOC; // Toggle TOC visibility
      alert(this.showTOC);
      if (this.showTOC) {
        this.tocEntries = [];
         this.editor.state.doc.descendants((node) => {
                    if(node.type.name === 'heading'){
                      
                      console.log("id ----->"+node.attrs.id);
                      this.tocEntries.push({
                        id : node.attrs.id,
                        title : node.textContent.trim()
                      })
                       this.store.commit('setData', this.tocEntries);
                    }   
            });
        // this.updateTOC(this.editor.getHTML()); // Update TOC entries when TOC is shown
      }
    },
    updateTOC(content) {
    },
       
    }               
}
</script>
<style lang="scss">
.ProseMirror p.is-editor-empty:first-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
  
  ul,
  ol {
    padding: 0 1rem;
  }
}


</style>