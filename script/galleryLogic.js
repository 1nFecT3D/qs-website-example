(function() {
    // init
    let nextBtn = document.querySelector(".btn--next");
    let prevBtn = document.querySelector(".btn--previous");
    let imageList = Array.from(document.querySelector(".image-list").children).map(img => {
        return (img.querySelector("img").src)
    });
    let imageThumbs = Array.from(document.querySelector(".image-list").children).map((thumb, index) => {
        return {
            thumb: thumb.querySelector("a"),
            imgSrc: thumb.querySelector("img").src,
            position: index,
        }
    });
    let mainImage = document.querySelector(".image-display img");
    let position = 0;
    let totalImages = imageList.length - 1;

    // thumbs click event
    imageThumbs.forEach((item, index) => {
        item["thumb"].addEventListener("click", (e) => {
            e.preventDefault();
            position = item["position"];
            mainImage.src = imageList[position];
        }, false);
    });

    // next click event    
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (position === totalImages) {
            position = 0
        } else {
            position++
        }
        mainImage.src = imageList[position];
    }, false);


    // previous click event
    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (position === 0) {
            position = totalImages;
        } else {
            position--
        }
        mainImage.src = imageList[position];
    }, false);
    
})();

// debounce function to treat click spamming mess
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
