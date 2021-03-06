// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
    constructor(domElement) {
        // assign this.domElement to the passed in domElement
        this.domElement = domElement;
        // create a reference to the ".expandButton" class. 
        this.expandButton = domElement.querySelectorAll('.expandButton')
            // Using your expandButton reference, update the text on your expandButton to say "expand"git
        this.expandButton.forEach(a => a.textContent = 'expand')
            // Set a click handler on the expandButton reference, calling the expandArticle method.
        this.removeButton = domElement.querySelectorAll('.removeButton');
        this.removeButton.forEach((item) => item.textContent = 'Click to Remove');
        this.removeButton.forEach((item) => item.addEventListener('click', () => this.removeArticle()));


        this.expandButton.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.expandArticle()
            })
        })


    }

    expandArticle() {
        // Using our reference to the domElement, toggle a class to expand or hide the article.
        this.domElement.classList.toggle('article-open')
    }

    removeArticle() {
        this.domElement.classList.toggle('article-hide')
    }

}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article').forEach(a => new Article(a))