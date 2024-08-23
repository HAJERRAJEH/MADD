      // إخفاء شاشة البداية بعد 5 ثوانٍ وعرض المحتوى الرئيسي
        setTimeout(function() {
            document.querySelector('.splash').style.display = 'none';
            document.querySelector('.main-content').style.display = 'block';
        }, 5000);
       // تبديل حالة القائمة المنسدلة
        function toggleMenu() {
            const menu = document.querySelector('.list');
            const menuBtn = document.querySelector('.menu-btn');
            menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة
            menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة
}

        

// Initial setup: hide the language options
document.addEventListener('DOMContentLoaded', function() {
    const options = document.getElementById('language-options');
    if (options) {
        options.style.display = 'none';
    }
});

// Function to toggle the visibility of the language options
document.getElementById('language-selector').addEventListener('click', function() {
    const options = document.getElementById('language-options');
    if (options.style.display === 'none' || options.style.display === '') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
});

// Function to change the language
function changeLanguage(lang) {
    // Change the language attribute of the body
    document.body.setAttribute('lang', lang);

    // Get all elements with language-specific data attributes
    const elements = document.querySelectorAll('[data-en], [data-ar]');
    
    elements.forEach(element => {
        // Get the text for the selected language
        const textEn = element.getAttribute('data-en');
        const textAr = element.getAttribute('data-ar');
        
        // Set the text content based on the selected language
        if (lang === 'en') {
            if (textEn) element.textContent = textEn;
        } else if (lang === 'ar') {
            if (textAr) element.textContent = textAr;
        }
    });

    // Optionally, you can update the language selector button or icon here
}


// التأكد من تحميل الصفحة بشكل كامل قبل تنفيذ أي شيفرة جافاسكريبت
document.addEventListener('DOMContentLoaded', () => {
    // تغيير اللغة بناءً على اللغة الافتراضية أو اللغة المفضلة
    changeLanguage(document.body.getAttribute('lang') || 'ar');
});

 document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.text-sequential');
    let index = 0;

    function showNextText() {
        if (index < elements.length) {
            elements[index].classList.add('active');
            index++;
            setTimeout(showNextText, 2000); // مدة عرض كل نص (2000ms = 2 ثانية)
        }
    }

    showNextText();
});




 document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // منع النموذج من الإرسال الافتراضي

            // إخفاء قسم "contact-left"
            document.getElementById('contact-left').style.display = 'none';

            // عرض رسالة النجاح
            document.getElementById('success-message').style.display = 'block';
        });