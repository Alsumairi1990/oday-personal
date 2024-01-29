
'use client'
import React from 'react';
import {useState} from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactForm = () => {
    const imagePath = 'https://d3mds3ychln71.cloudfront.net/img/title-bg3.png';
    const imagePath1 = "https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/main/contact.jpg"
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleChange = (event:any)=> {
       alert(event)
    }
  const projectTypes = [
    {
        type: 'Logo Design',
        description: 'Create a unique and memorable logo that represents your brand.',
    },
    {
        type: 'Brand Identity',
        description: 'Develop a cohesive visual identity, including logos, color schemes, and typography.',
    },
    {
        type: 'Web Design',
        description: 'Design or redesign websites to ensure a visually appealing and user-friendly online presence.',
    },
    {
        type: 'Print Design',
        description: 'Create materials for print, such as brochures, business cards, posters, and banners.',
    },
    {
        type: 'Packaging Design',
        description: 'Design attractive and effective packaging for products.',
    },
    {
        type: 'Social Media Graphics',
        description: 'Craft graphics optimized for various social media platforms, including posts, banners, and profile images.',
    },
    {
        type: 'Illustration',
        description: 'Provide custom illustrations for various purposes, such as book covers, marketing materials, or digital assets.',
    },
    {
        type: 'UI/UX Design',
        description: 'Design user interfaces and experiences for websites, apps, or software.',
    },
    {
        type: 'Infographics',
        description: 'Create visually engaging and informative infographics to present data or information in a more digestible format.',
    },
    {
        type: 'Merchandise Design',
        description: 'Design graphics for merchandise such as T-shirts, mugs, and other promotional items.',
    },
    {
        type: 'Email Newsletter Design',
        description: 'Design visually appealing email templates for newsletters or marketing campaigns.',
    },
    {
        type: 'Event Graphics',
        description: 'Develop graphics for events, including invitations, posters, and promotional materials.',
    },
    {
        type: 'Corporate Collateral',
        description: 'Design various corporate materials like letterheads, business cards, and presentations.',
    },
    {
        type: 'E-book or Print Book Cover Design',
        description: 'Create visually striking covers for digital or print publications.',
    },
    {
        type: 'Environmental Graphics',
        description: 'Design graphics for physical spaces, such as office interiors or event spaces.',
    },
];


  return (
    <div className="shadow-lg  bg-white dark:bg-black-150 border dark:border-gray-600 rounded-xl w-11/12 mx-auto  " style={{boxShadow:' 3px 3px 40px rgb(0 0 0/15%)'}}>
     <div className="grid grid-cols-1 sm:grid-cols-3 ">
        <div className="pr-8">
            <div className="bg-[#162d42] dark:bg-black-100 dark:border-r bg-no-repeat bg-center bg-cover rounded-l-xl dark:border-r-gray-800 h-full" style={{backgroundImage:`url(${imagePath1})`}}>
                <div className="flex mb-4 justify-between pt-5 pb-1 px-4 bg-no-repeat bg-bottom " style={{backgroundImage: `url(${imagePath})`}}>
                    <div className=" flex flex-col flex-100 rounded  p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className=" flex justify-center pb-2">
                              <svg  className='w-12 h-12 fill-white' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0 3h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-6h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-8-1c-.822 0-1.5.678-1.5 1.5v6c0 .822.678 1.5 1.5 1.5h4c.822 0 1.5-.678 1.5-1.5v-6c0-.822-.678-1.5-1.5-1.5zm0 1h4c.286 0 .5.214.5.5v6c0 .286-.214.5-.5.5h-4c-.286 0-.5-.214-.5-.5v-6c0-.286.214-.5.5-.5zm2-10c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5S6 6.777 6 6.5v-4c0-.277.223-.5.5-.5zm17 0c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-4c0-.277.223-.5.5-.5zm-22 2C.678 4 0 4.678 0 5.5v20c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-20c0-.822-.678-1.5-1.5-1.5h-3c-.66 0-.664 1 0 1h3c.286 0 .5.214.5.5v20c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-20c0-.286.214-.5.5-.5h3c.67 0 .654-1 0-1zm7 0c-.63 0-.683 1 0 1h13c.66 0 .66-1 0-1z"/></svg>
                            </span>
                            <p className="text-lead-feature flex-50 text-sm text-white dark:text-gray-900 font-medium mb-0">Brief us :  samdesign@gmail.com</p>
                            <p className="text-lead-feature flex-50 text-sm text-white dark:text-gray-900 font-medium mb-0">sales@mobulous.com (Sales)</p>
                            <p className="pt-1 text-sm text-orange-400 dark:text-gray-900 font-semibold mb-0">+90547114547</p>
                        </div>
                    </div>
                </div>


                <div className="flex mb-4 justify-between pb-1 px-4 bg-no-repeat bg-bottom " style={{backgroundImage: `url(${imagePath})`}}>
                    <div className=" flex flex-col flex-100 rounded p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className="icon inline-block flex-50 w-[4.5rem] icon-lead ">
                                <img className='w-full' src="https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg" alt="" />
                            </span>
                            <p className="flex-50 text-sm text-white dark:text-gray-900 font-semibold mb-2">Mobulous Technologies Pvt Ltd, 2nd Floor, H-146/147, Sector 63, Noida, UP-India PIN:- 201301</p>
                            {/* <p className="flex-50 text-sm text-orange-400 dark:text-gray-900 font-semibold mb-0 ">+90547114547</p>                        */}
                             </div>
                       
                    </div>
                   
                </div>

                <div className="flex  justify-between pb-1 px-4">
                    <div className=" flex flex-col flex-100 border rounded border-[rgba(0,0,0,0.125)] p-2 text-center text-sm font-semibold col-6 flex-fill">
                        <div className="p-1 pb-0 pt-2">
                        <p className="text-lead-feature flex-50 text-md text-white dark:text-gray-900 font-weight-semibold mb-0">Contact US through skype</p>
                        <div className="flex justify-center pt-2 gap-x-4" >
                        <span className="h-8 w-8 bg-white justify-center flex items-center rounded-full " >
                            <svg className="w-5 h-5 "viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <title>Skype-color</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs>
                                </defs>
                                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Color-" transform="translate(-400.000000, -660.000000)" fill="#00AEF3">
                                            <path d="M446.619944,689.095462 C446.967074,687.531907 447.147695,685.912711 447.147695,684.249 C447.147695,671.785081 436.900282,661.677621 424.253998,661.677621 C422.921919,661.677621 421.61524,661.791688 420.339605,662.008694 C418.293509,660.737263 415.87206,660 413.278457,660 C405.943556,660 400,665.859155 400,673.09268 C400,675.507564 400.66604,677.766649 401.823142,679.714137 C401.521167,681.177534 401.360301,682.696575 401.360301,684.249 C401.360301,696.718484 411.610536,706.823161 424.253998,706.823161 C425.687676,706.823161 427.087488,706.692401 428.447789,706.444792 C430.318909,707.435229 432.452493,708 434.724365,708 C442.056444,708 448,702.138063 448,694.910103 C448,692.820727 447.503293,690.8482 446.619944,689.095462 Z M435.997178,695.03808 C434.938852,696.518171 433.375353,697.686663 431.343368,698.515736 C429.336783,699.339245 426.932267,699.759346 424.19191,699.759346 C420.904045,699.759346 418.146754,699.189011 415.993415,698.06225 C414.455315,697.244305 413.188147,696.13702 412.225776,694.76265 C411.252117,693.382716 410.761054,692.011128 410.761054,690.684055 C410.761054,689.860546 411.082785,689.142758 411.714958,688.555729 C412.341486,687.971483 413.145814,687.67936 414.105362,687.67936 C414.889934,687.67936 415.570085,687.910276 416.120414,688.369327 C416.648166,688.811685 417.099718,689.465484 417.463782,690.302904 C417.870179,691.221005 418.310442,691.994436 418.776105,692.598157 C419.227658,693.187967 419.873942,693.680403 420.698024,694.067119 C421.527752,694.451052 422.648166,694.651365 424.022578,694.651365 C425.916275,694.651365 427.468485,694.250739 428.634055,693.46618 C429.777046,692.701095 430.330198,691.77743 430.330198,690.647887 C430.330198,689.760389 430.039511,689.059294 429.446849,688.508433 C428.82032,687.935316 427.999059,687.490176 427.002822,687.178578 C425.96143,686.861415 424.550329,686.51365 422.803387,686.151974 C420.424271,685.651191 418.406397,685.058599 416.803387,684.382542 C415.160865,683.695357 413.837253,682.741089 412.869238,681.547557 C411.887112,680.331768 411.387582,678.809946 411.387582,677.02104 C411.387582,675.318379 411.90969,673.779864 412.942615,672.455573 C413.964252,671.139628 415.460019,670.110242 417.387582,669.411928 C419.286924,668.719179 421.544685,668.368632 424.104421,668.368632 C426.147695,668.368632 427.945437,668.60233 429.446849,669.064163 C430.956726,669.525995 432.226717,670.149191 433.225776,670.91984 C434.233302,671.698835 434.984008,672.525126 435.452493,673.387585 C435.926623,674.25839 436.169332,675.123631 436.169332,675.96105 C436.169332,676.767866 435.853246,677.502347 435.229539,678.139454 C434.60301,678.784907 433.809972,679.110416 432.878645,679.110416 C432.031985,679.110416 431.365945,678.904538 430.908749,678.503912 C430.479774,678.128326 430.033866,677.544079 429.539981,676.709442 C428.969897,675.641106 428.278457,674.798122 427.485419,674.202747 C426.714958,673.624065 425.430856,673.334724 423.661336,673.334724 C422.024459,673.334724 420.686736,673.657451 419.696143,674.300122 C418.742239,674.914971 418.276576,675.624413 418.276576,676.464615 C418.276576,676.976526 418.426152,677.407755 418.736595,677.774996 C419.058325,678.170057 419.518344,678.509477 420.099718,678.798818 C420.700847,679.096505 421.321731,679.335768 421.942615,679.502695 C422.577611,679.677969 423.644403,679.936707 425.109125,680.270562 C426.963311,680.660059 428.665099,681.102417 430.169332,681.57816 C431.696143,682.056686 433.011289,682.646496 434.08937,683.339245 C435.184384,684.043123 436.0508,684.944531 436.668862,686.023996 C437.286924,687.111807 437.600188,688.447227 437.600188,690.002434 C437.600188,691.860894 437.058325,693.555208 435.997178,695.03808 Z" id="Skype">
                                </path>
                                        </g>
                                    </g>
                                </svg>                       
                        </span>
                        <span className="h-8 w-8 bg-white justify-center flex items-center rounded-full " >
                          <svg className='w-5 h-5' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 418.135 418.135">
                            <g>
                                <path style={{fill:'#7AD06D'}} d="M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536
                                    L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631
                                    c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197
                                    c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607
                                    l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819
                                    c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817
                                    C371.446,250.361,354.281,291.803,323.886,322.197z"/>
                                <path style={{fill:'#7AD06D'}} d="M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008
                                    c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218
                                    l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356
                                    c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057
                                    c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z"/>
                            </g>
                            </svg>
                        </span>


                        <span className="h-8 w-8 bg-white justify-center flex items-center rounded-full " >
                          <svg className='w-5 h-5' viewBox="-0.5 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <defs>

                            </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-302.000000, -7321.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M260.000175,7163 L260.000175,7161 L258.000175,7161 L258.000175,7163 L256.000175,7163 L256.000175,7165 L258.000175,7165 L258.000175,7167 L260.000175,7167 L260.000175,7165 L262.000175,7165 L262.000175,7163 L260.000175,7163 Z M260.117175,7173.578 C259.422175,7173.204 258.719175,7172.778 257.992175,7172.481 C256.587175,7171.908 256.682175,7173.602 255.679175,7174.151 C255.027175,7174.508 254.107175,7173.861 253.538175,7173.503 C252.544175,7172.877 251.663175,7172.053 250.931175,7171.1 C250.556175,7170.613 249.728175,7169.697 249.830175,7169.014 C249.992175,7167.93 251.274175,7167.876 250.907175,7166.55 C250.711175,7165.84 250.360175,7165.141 250.097175,7164.457 C249.745175,7163.54 249.600175,7162.953 248.573175,7163.003 C247.831175,7163.039 247.339175,7163.356 246.883175,7163.951 C245.649175,7165.558 245.835175,7167.725 246.664175,7169.488 C247.838175,7171.983 249.850175,7174.335 251.999175,7175.855 C253.461175,7176.889 255.387175,7177.828 257.157175,7177.987 C258.453175,7178.104 260.266175,7177.403 260.730175,7175.996 C260.698175,7176.094 260.667175,7176.189 260.652175,7176.234 C260.663175,7176.199 260.687175,7176.128 260.730175,7175.996 C260.749175,7175.94 260.761175,7175.902 260.773175,7175.866 C260.760175,7175.905 260.746175,7175.948 260.731175,7175.993 C261.139175,7174.753 261.189175,7174.155 260.117175,7173.578 L260.117175,7173.578 Z M260.773175,7175.866 C260.789175,7175.817 260.803175,7175.774 260.811175,7175.751 C260.805175,7175.77 260.791175,7175.811 260.773175,7175.866 L260.773175,7175.866 Z" id="call-[#187]">

                                    </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>

                        </div>
                        
                        </div>
                       
                    </div>
                  
                </div>
                {/* <div className="px-4 pt-0">
                    <h2 className="text-gray-600 text-md font-semibold">Request best quality of <span className='text-orange-500'>Servics</span> based on highest staudards</h2>
                </div> */}

                
            </div>
        </div>
        <div className="col-span-2 max-sm:p-4 pr-4 ">
            <div className="flex flex-col items-center mb-2 justify-center">
                <span className="inline-block w-12 mb-1.5">
                <svg width="100%" height="100%" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M895.3 278.8L529.6 77.7c-11-6.1-24.3-6-35.2 0l-154.5 85c-13.4-9.4-29.7-15-47.3-15-45.4 0-82.3 36.9-82.3 82.3s36.9 82.3 82.3 82.3 82.3-36.9 82.3-82.3c0-1 0-2-0.1-3L512 151.4l329.1 181v359L512 872.6l-329.1-181V445.9l292.6 92.9v82.4c-27.1 13.5-45.7 41.4-45.7 73.7 0 45.4 36.9 82.3 82.3 82.3s82.3-36.9 82.3-82.3c0-32.2-18.6-60.2-45.7-73.7v-87.7l81.7-45.4c13.2 8.9 29 14.2 46.1 14.2 45.4 0 82.3-36.9 82.3-82.3s-36.9-82.3-82.3-82.3-82.3 36.9-82.3 82.3c0 1.5 0 3 0.1 4.5L508 472.4 157.4 361c-11.1-3.5-23.2-1.6-32.7 5.3-9.4 6.9-15 17.9-15 29.5v317.3c0 13.3 7.3 25.6 18.9 32l365.7 201.1c5.5 3 11.6 4.5 17.6 4.5s12.1-1.5 17.6-4.5l365.7-201.1c11.7-6.4 18.9-18.7 18.9-32V310.9c0.2-13.4-7.1-25.7-18.8-32.1z m-602.7-21.4c-15.1 0-27.4-12.3-27.4-27.4s12.3-27.4 27.4-27.4S320 214.9 320 230s-12.3 27.4-27.4 27.4z m383.8 135.2c15.1 0 27.4 12.3 27.4 27.4s-12.3 27.4-27.4 27.4S649 435.1 649 420s12.3-27.4 27.4-27.4zM512 722.3c-15.1 0-27.4-12.3-27.4-27.4s12.3-27.4 27.4-27.4 27.4 12.3 27.4 27.4-12.3 27.4-27.4 27.4z" className='fill-black dark:fill-white' /></svg>
                </span>
                <h1 className="text-black-150 dark:text-white text-center text-2xl font-semibold">Which <span className="text-orange-400">services</span> are you looking for?</h1>
            </div>
            <div className=" border-b border-b-gray-200 dark:border-gray-800 pb-5">
                <div className="grid sm:grid-cols-2 gap-6">
                <div className=" flex items-center z-0 w-full mb-5 group">
                    <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </span>
                    <div className="relative flex w-full">
                    <input type="text" name="user_name" id="user_name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md rounded-l-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " required />
                    <label htmlFor="user_name" className="ml-2  peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-focus:py-0.5 bg-white  peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">User Name</label>
                    </div>
                </div>
                <div className=" flex items-center z-0 w-full mb-5 group">
                    <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </span>
                    <div className="relative flex w-full">
                    <input type="email" name="floating_email" id="floating_email" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md rounded-l-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="ml-2  peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-focus:py-0.5 bg-white  peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Email address</label>
                    </div>
                </div>
                <div className="flex z-10 w-full ">
                <PhoneInput 
                country={'us'}
                value={phoneNumber}
                onChange={(e) => handleChange(e)}
                />
                </div>
                <div className=" flex relative flex-col h-10 text-gray-600 l border border-gray-300 rounded-md w-full group">
                    <div className="flex items-center overflow-hidden">
                      <span className="w-12 border-r border-r-gray-300 rounded-l-lg justify-center h-10 flex items-center bg-gray-100 ">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M7 12H17M9 18H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                       </span>
                      <button id="dropdownRadioHelperButton" data-dropdown-toggle="dropdownRadioHelper" className="text-gray-500 relative w-full  hover:bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Project type 
                       <svg className="w-2.5 h-2.5 ms-3 absolute right-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                         </svg>
                       </button>
                    </div>
                    <div id="dropdownRadioHelper" className="!z-50 max-h-56 hidden overflow-y-auto absolute top-11 sm:left-10 bg-white divide-y border border-gray-200 w-full divide-gray-100 rounded-lg shadow sm:w-72 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                            {projectTypes.map((project, index) => (
                                <li key={index}>
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={`helper-radio-${index}`}
                                                name="helper-radio"
                                                type="radio"
                                                value={project.type}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{project.type}</div>
                                                <p id={`helper-radio-text-${index}`} className="text-xs font-normal text-gray-500 dark:text-gray-300">{project.description}</p>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
               
                
                </div>
            </div>
            <div className="p-2 pt-4 ">
                <div className="">
                    <h2 className="text-sm font-semibold text-gray-700">Preferred Communication Method</h2>
                    <div className="py-2 grid grid-cols-3 items-center">
                        {/* <div className="">
                            <div className="flex items-center ">
                            <div className="inline-flex items-center">
                                    <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                        <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check" />
                                        <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                        </svg>
                                        </span>
                                    </label>
                                    <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check">
                                    Social Media Marketing
                                    </label>
                                </div> 
                            </div>
                        </div> */}

                        <div className="">
                            <div className="flex items-center ">
                                <div className="inline-flex items-center">
                                        <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-1" />
                                            <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-1">
                                        Email
                                        </label>
                                </div> 
                            </div>
                        </div>

                 


                        <div className="">
                            <div className="flex items-center">
                            <div className="inline-flex items-center">
                                        <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-4" />
                                            <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-4">
                                        Phone Number
                                        </label>
                                </div> 
                            </div>
                        </div>


                        <div className="">
                            <div className="flex items-center">
                            <div className="inline-flex items-center">
                                        <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-5" />
                                            <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-5">
                                        Video Call
                                        </label>
                                </div> 
                            </div>
                        </div>


                        {/* <div className="">
                            <div className="flex items-center">
                            <div className="inline-flex items-center">
                                        <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-6" />
                                            <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-6">
                                        Others
                                        </label>
                                </div> 
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="p4">
        <div className="">

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Your message</label>
            <textarea id="message" rows={2} className="block p-2.5 w-full text-sm text-gray-100 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-600 focus:border-violet-700 dark:bg-black-150 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-600 dark:focus:border-violet-700" placeholder="Write your thoughts here..."></textarea>

        </div>
     </div>
     <div className="my-2 p-2 text-center">
     <a href="" className="bg-orange-500 dark:bg-violet-600 rounded-md px-6 py-1.5 text-white inline-block">Submite</a>
     </div>

        </div>

     </div>
    
     
     

    
    </div>
    
   
  );
};

export default ContactForm;