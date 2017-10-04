export class Article {

  constructor(
    public id?: number,
    public title?: string,
    public body?: string,
    public user?: string,
    public userName?: string,
    public category?: string,
    public timeAsOff?: string
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.user = user;
    this.userName = userName;
    this.category = category;
    this.timeAsOff = timeAsOff;
  }


}
