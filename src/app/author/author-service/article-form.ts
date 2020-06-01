export interface ArticleForm{
    title: string;
    secondaryTitle: string;
    category: string;
    introduction: string;
    content: string;
    userId: number;
    creationDate: Date;
    image: string | ArrayBuffer;
}