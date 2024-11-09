export function slugify(text:any) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }

  export function truncateByLetters(text: string, limit: number): string {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  }

  export function truncateByWords(text: string, wordLimit: number): string {
    const words = text.split(" ");
    return words.length > wordLimit ? `${words.slice(0, wordLimit).join(" ")}...` : text;
  }