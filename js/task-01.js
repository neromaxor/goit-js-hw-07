  const categories = document.querySelectorAll('#categories .item');

        categories.forEach(category => {
            const categoryName = category.querySelector('h2').textContent;
            const items = category.querySelectorAll('ul li');

            console.log(`Category: ${categoryName}`);
            console.log(`Elements: ${items.length}`);
        });

  //          const allCategories = document.getElementById("categories");
  //  const categories = allCategories.children;
  //  console.log(`Number of categories: ${categories.length}`);
        
  //          Array.from(categories).forEach(category => {
  //           const categoryName = category.querySelector('h2').textContent;
  //           const itemsLength = category.querySelectorAll('ul > li').length;

  //           console.log(`Category: ${categoryName}`);
  //           console.log(`Elements: ${itemsLength}`);
  //          });
        