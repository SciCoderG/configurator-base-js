class PageDataScheme {
  constructor(content, link) {
    this.content = content;
    this.link = link;
  }
}

const navItems = [
  new PageDataScheme("Games", "/games"),
  new PageDataScheme("Projects", "/projects"),
  new PageDataScheme("Contact", "/contact"),
];

export { navItems, PageDataScheme };
