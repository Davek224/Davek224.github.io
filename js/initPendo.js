


// let apiKey = new URLSearchParams(window.location.search).get("apikey");
// apiKey = apiKey || 'someDefaultApiKey';
// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
//         v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
//             o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://pendo-dev-static.storage.googleapis.com/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
// })('08d6bcaf-4fa5-4d41-5b14-428db3c622c6');

(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
        v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
            o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://staging-cdn.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
})('8d8c765b-239b-4fc9-5418-921143a0c448');









// in your authentication promise handler or callback
// in your authentication promise handler or callback
// pendo.initialize({
//     visitor: {
//         id:              'testResponse35'   // Required if user is logged in
//         // email:        // Recommended if using Pendo Feedback, or NPS Email
//         // full_name:    // Recommended if using Pendo Feedback
//         // role:         // Optional

//         // You can add any additional visitor level key-values here,
//         // as long as it's not one of the above reserved names.
//     },

//     account: {
//         id:           'ACCOUNT-UNIQUE-ID2212Dave2' // Required if using Pendo Feedback
//         // name:         // Optional
//         // is_paying:    // Recommended if using Pendo Feedback
//         // monthly_value:// Recommended if using Pendo Feedback
//         // planLevel:    // Optional
//         // planPrice:    // Optional
//         // creationDate: // Optional

//         // You can add any additional account level key-values here,
//         // as long as it's not one of the above reserved names.
//     }
// });
