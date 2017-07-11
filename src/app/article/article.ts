export class Article {

  constructor(
    public id?: number,
    public title?: string,
    public body?: string,
    public user?: string,
    public category?: string,
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.user = user;
    this.category = category;
  }

}
