// Get quote from API
async function getQuote() {
    const proxyURL = 'https://corsproxy.io/';
    const apiUrl = 'https://forismatic.com/en/api/?method=getQuote&lang=en&format=json';
    
    try {
        const response = await fetch(proxyURL + apiUrl);
        
        // التحقق إذا كانت الاستجابة بتنسيق JSON
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);  // هذا يعرض البيانات التي تم جلبها
    } catch (error) {
        console.log('Whoops! No quote:', error);  // هذا سيعرض الخطأ إن حدث
    }
}

// On load
getQuote();
