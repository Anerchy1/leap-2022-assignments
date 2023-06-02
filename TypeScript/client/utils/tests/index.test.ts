import { composeArticleSlug, cutTextToLength, extractArticleIdFromSlug, slugify } from "..";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});
const str2 = "Hello World";
describe("slugify", ()=>{
    it('something', ()=>{
        expect(slugify(str2)).toBe('hello-world');
    })
})

describe('composeArticleSlug', ()=>{
    const id = 123 ;
    const title = "Something"
    it('something', ()=>{
        expect(composeArticleSlug(id,title)).toBe('something-123')
    })
    const slug= composeArticleSlug(id,title)
    it('test2', ()=>{
        expect(extractArticleIdFromSlug(slug)).toBe('123')
    })
})