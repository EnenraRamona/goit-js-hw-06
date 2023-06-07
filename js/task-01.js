const ulEl = document.querySelector(`ul#categories`);


if (ulEl) {
    const liEls = ulEl.querySelectorAll(`li.item`);
    const categoryCount = liEls.length;
    console.log(`Number of categories:`, categoryCount);

    liEls.forEach((liEl) => {
        const title = liEl.querySelector(`h2`).textContent;
        const subLiEls = liEl.querySelectorAll(`li`);
        const subLiCount = subLiEls.length;

        console.log(`Category:`, title);
        console.log(`Elements:`, subLiCount);
    })
};

