// /**
//  * Font Awesome CDN Setup Webfont
//  * 
//  * This will load Font Awesome from the Font Awesome Free or Pro CDN.
//  */
// if (!function_exists('fa_custom_setup_cdn_webfont')) {
//     function fa_custom_setup_cdn_webfont($cdn_url = '', $integrity = null) {
//         $matches = [];
//         $match_result = preg_match('|/([^/]+?)\.css$|', $cdn_url, $matches);
//         $resource_handle_uniqueness = ($match_result === 1) ? $matches[1] : md5($cdn_url);
//         $resource_handle = "font-awesome-cdn-webfont-$resource_handle_uniqueness";

//         foreach(['wp_enqueue_scripts', 'admin_enqueue_scripts', 'login_enqueue_scripts'] as $action) {
//             add_action(
//                 $action,
//                 function () use($cdn_url, $resource_handle) {
//                 wp_enqueue_style($resource_handle, $cdn_url, [], null);
//             }
//             );
//         }

//         if ($integrity) {
//             add_filter(
//                 'style_loader_tag',
//                 function ($html, $handle) use($resource_handle, $integrity) {
//                     if(in_array($handle, [$resource_handle], true)) {
//                 return preg_replace(
//                     '/\/>$/',
//                     'integrity="'.$integrity.
//                 '" crossorigin="anonymous" />',
//                     $html,
//                     1
//                 );
//             } else {
//                 return $html;
//             }
//         },
//         10,
//             2
//         );
//     }
// }
//   }


const viewMore = document.querySelector('#viewMore');
viewMore.addEventListener('click', () => {
    addHomes();
});

const featured = document.querySelector('#featuredDiv');

const addHomes = () => {
    for (let i = 0; i < 30; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        const anchor = document.createElement('a');
        anchor.classList.add('anchor');
        const card = document.createElement('div');
        card.classList.add('card', 'h-100');
        const newDiv = document.createElement('div');
        const forSale = document.createElement('div');
        forSale.classList.add('forSale');
        forSale.textContent = 'FOR SALE'
        const home = document.createElement('img')
        home.src = 'homes/demo.jpg';
        home.classList.add('card-img-top');
        const body = document.createElement('div');
        body.classList.add('card-body');
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = 'Modern Residence in Tulsa';
        const p = document.createElement('p');
        p.textContent = '12345 S Tulsa Ave, Tulsa, OK 74137';
        const cardFeat = document.createElement('ul');
        cardFeat.classList.add('cardFeat');
        const bath = document.createElement('li');
        bath.classList.add('fas', 'fa-bath');
        bath.innerHTML = '&nbsp;&nbsp;3'
        const bed = document.createElement('li');
        bed.classList.add('fas', 'fa-bed');
        bed.innerHTML = '&nbsp;&nbsp;2';
        const li3 = document.createElement('li');
        li3.textContent = '2,500 sq ft';
        newDiv.appendChild(forSale);
        newDiv.appendChild(home);
        card.appendChild(newDiv);
        anchor.appendChild(card);
        col.appendChild(anchor);
        featured.append(col);
        newDiv.append(body);
        body.appendChild(title);
        title.append(p);
        p.append(cardFeat);
        cardFeat.appendChild(bath);
        bath.append(bed);
        bed.append(li3);
    };

};