const categories = document.querySelectorAll('.item');
console.log('Number of Categories: ', categories.length);

categories.forEach(category => {
    const group = [...category.children];
    group.forEach(element => {
        if(element.tagName === 'H2') {
            console.log('Category: ', element.textContent);
        }
    });

    group.forEach(element => {
        if(element.tagName === 'UL') {
            console.log('Elements: ', element.children.length);
        }
    });
})

// const categoryLength = [...category.children];


// for (const category of categories) {
//     if(category.tagName === 'H2'){
//         console.log('Category: ', category.textContent);
//     }
// }





// const categoryNumbers = document.querySelectorAll('h2');

// for (const category of categoryNumbers) {
//     if (category === 'H2') {
//         return 
//     }
//     console.log(category.textContent);
// }

// const categories = document.querySelectorAll('.item');

// console.log('Number of Categories: ', categories.length);

// categories.forEach(category =>{
//     const group = [...category.children];

//     group.forEach(element => {
//         if (element.TagName === 'H2'){
//         console.log('Category: ', element.textContent);
//         }
//     });

//     group.forEach(element => {
//         if(element.TagName === 'UL') {
//             console.log('Elements: ', element.length);
//         }
//     });
//     console.log('');

// });


