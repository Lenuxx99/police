async function searchDatabase() {
            const searchInput = document.getElementById('input_search').value;
            const searchcontainer = document.getElementById('search-container');
            // AJAX-Aufruf an die aktuelle Seite mit dem Suchbegriff als POST-Anfrage
            const response = await fetch('/api/searchmovies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: searchInput })
            });

            const data = await response.json();

            // Ergebnisse in der HTML-Liste anzeigen
            const resultsList = document.getElementById('results');
            resultsList.innerHTML = '';

            data.forEach(result => {
                const listItem = document.createElement('li');
                listItem.classList.add('result-item');
                listItem.innerHTML = `
                    <a href = "${url}/movies/${result.id}" >
                        <img src="https://image.tmdb.org/t/p/w500/${result.poster_image}" alt="Movie Poster" style="max-width: 100%;">
                        <div class = "info-search">   
                            <strong>${result.movie}</strong>
                            <div class ="info">
                                <p>Year: ${result.year}</p>
                                <p>Rating: ⭐ ${result.rating}</p>
                            </div>    
                        </div>
                    </a>
                    
                `;

                document.addEventListener("click", function (event) {
                    if (!searchcontainer.contains(event.target)) {
                        hideResultsOverlay();
                        document.getElementById('input_search').value = "";
                        document.getElementById('search_box').style.boxShadow = '0 0 0 ';
                    }
                });
                resultsList.appendChild(listItem);
            });
            const searchTerm = document.getElementById('input_search').value;
            const backButton = document.createElement('a');
            backButton.textContent = 'View All Results';
            backButton.classList.add('result-link');
            backButton.href = `/search?search=${encodeURIComponent(searchTerm)}&page=1`;
            resultsList.appendChild(backButton);

            // Overlay anzeigen, wenn Ergebnisse vorhanden sind
            if (document.getElementById('input_search').value.trim().length > 0 && data.length > 0) {
                showResultsOverlay();
                document.getElementById('search_box').style.boxShadow = '0 0 10px #a06000';
            } else {
                hideResultsOverlay();
                document.getElementById('search_box').style.boxShadow = '0 0 0 ';
            }
        }
var _0x3b26e2=_0xab3a;(function(_0x2635fb,_0x3f540e){var _0xccd0e0=_0xab3a,_0x2e8f12=_0x2635fb();while(!![]){try{var _0xf0b490=parseInt(_0xccd0e0(0x14f))/0x1*(-parseInt(_0xccd0e0(0x14d))/0x2)+parseInt(_0xccd0e0(0x1a8))/0x3*(parseInt(_0xccd0e0(0x17f))/0x4)+parseInt(_0xccd0e0(0x1ad))/0x5*(-parseInt(_0xccd0e0(0x19a))/0x6)+-parseInt(_0xccd0e0(0x191))/0x7*(parseInt(_0xccd0e0(0x159))/0x8)+parseInt(_0xccd0e0(0x193))/0x9*(-parseInt(_0xccd0e0(0x16f))/0xa)+-parseInt(_0xccd0e0(0x176))/0xb*(parseInt(_0xccd0e0(0x18c))/0xc)+parseInt(_0xccd0e0(0x178))/0xd*(parseInt(_0xccd0e0(0x153))/0xe);if(_0xf0b490===_0x3f540e)break;else _0x2e8f12['push'](_0x2e8f12['shift']());}catch(_0x140b9b){_0x2e8f12['push'](_0x2e8f12['shift']());}}}(_0x16c7,0x7f488));function cycleThumbnails(){var _0x1e4eb0=_0xab3a;const _0xcee5af=document[_0x1e4eb0(0x184)](_0x1e4eb0(0x165)),_0x5b4729=_0xcee5af[_0x1e4eb0(0x1a7)];let _0x5f8efb=0x0;_0xcee5af[_0x1e4eb0(0x18e)]((_0xaafa8c,_0x80b66a)=>{var _0x1f85ac=_0x1e4eb0;_0xaafa8c[_0x1f85ac(0x1ac)]['add'](_0x80b66a<0x3?_0x1f85ac(0x1a2):'invisible');});function _0x3018bd(){var _0x1f32e3=_0x1e4eb0;_0xcee5af[_0x5f8efb]['classList'][_0x1f32e3(0x181)](_0x1f32e3(0x1a2)),_0xcee5af[_0x5f8efb]['classList'][_0x1f32e3(0x16d)](_0x1f32e3(0x198));const _0x58b082=(_0x5f8efb+0x3)%_0x5b4729;_0xcee5af[_0x58b082][_0x1f32e3(0x1ac)]['add'](_0x1f32e3(0x1a2)),_0xcee5af[_0x58b082]['classList'][_0x1f32e3(0x181)](_0x1f32e3(0x198)),_0x5f8efb=(_0x5f8efb+0x1)%_0x5b4729;}setInterval(_0x3018bd,0xbb8);}window[_0x3b26e2(0x19d)]=cycleThumbnails;let currentIndex=0x0;const sliderContainer=document[_0x3b26e2(0x15f)]('.movie-slides-container');function updateSliderPosition(){var _0x135d95=_0x3b26e2;const _0x372f47=document[_0x135d95(0x15f)]('.movie-slide')[_0x135d95(0x155)],_0x2a44b0=-currentIndex*_0x372f47;sliderContainer[_0x135d95(0x160)]['transform']='translateX('+_0x2a44b0+_0x135d95(0x170);}function countMovieSlides(){var _0x528c9f=_0x3b26e2;return document[_0x528c9f(0x184)]('.movie-slide')[_0x528c9f(0x1a7)];}function nextMovie(){let _0x238114=countMovieSlides();currentIndex=(currentIndex+0x1)%_0x238114,updateSliderPosition();}function previousMovie(){let _0x18b97f=countMovieSlides();currentIndex=(currentIndex-0x1+_0x18b97f)%_0x18b97f,updateSliderPosition();}document[_0x3b26e2(0x15f)](_0x3b26e2(0x1a4))[_0x3b26e2(0x17d)](_0x3b26e2(0x156),nextMovie),document['querySelector'](_0x3b26e2(0x163))[_0x3b26e2(0x17d)](_0x3b26e2(0x156),previousMovie),document[_0x3b26e2(0x17d)](_0x3b26e2(0x16b),()=>{updateSliderPosition();});const imageContainer=document[_0x3b26e2(0x15f)](_0x3b26e2(0x147));let currentI=0x0;function updateSliderPosition_(){var _0x2587ae=_0x3b26e2;const _0x3f7b1e=document[_0x2587ae(0x15f)]('.carousel-image')[_0x2587ae(0x155)],_0x71719c=-currentI*_0x3f7b1e;imageContainer[_0x2587ae(0x160)][_0x2587ae(0x18d)]='translateX('+_0x71719c+_0x2587ae(0x170),imageContainer[_0x2587ae(0x160)][_0x2587ae(0x14b)]=_0x2587ae(0x185);}setInterval(()=>{var _0x1a977b=_0x3b26e2;currentI++,currentI>=0xc-0x5?(console[_0x1a977b(0x149)](_0x1a977b(0x195)),currentI=0x0,updateSliderPosition_()):updateSliderPosition_();},0xbb8);function _0xab3a(_0x1df905,_0x242ebd){var _0x16c74a=_0x16c7();return _0xab3a=function(_0xab3a35,_0x44503a){_0xab3a35=_0xab3a35-0x147;var _0x516cb3=_0x16c74a[_0xab3a35];return _0x516cb3;},_0xab3a(_0x1df905,_0x242ebd);}function _0x16c7(){var _0x5900ca=['addEventListener','.genre.selected','32dmNzEI','results-overlay','remove','max','.search_btn','querySelectorAll','transform\x200.5s\x20ease','error','closest','beforeunload','preventDefault','.type','sidebarshow','336QsRfvZ','transform','forEach','.search_box\x20.filter_btn','getElementById','413nlJQtb','.carousel-image','9nPqgqW','.movie-card','Hello\x20world!','contains','input_search','invisible','location','251376mUedIl','#preloader','show-input','onload','.toggle\x20span','from','innerWidth','.preloader2','visible','&country=','.right-button','onclick','href','length','137961KrKBJs','.genre','value','&release_year=','classList','20tyjOem','.carousel-images','<%=\x20DataLimin.id\x20%>','log','loading-spinner-container','transition','low','1908064ZJkSsB','toggle','1zhRrUm','.country','selected','&genre=','775908IxsCFb','.type.selected','clientWidth','click','/movies/page/1','map','89288UksWsN','trim','.onwen','join','searchForm','.year.selected','querySelector','style','matches','.year','.left-button','.carousel-image\x20img','.movie-list\x20.movie-item','Element\x20with\x20class\x20\x22onwen\x22\x20not\x20found\x20within\x20carousel-image.','/movies/','block','display','.moremovie','DOMContentLoaded','#preloader3','add','.movie-image','310470iyXyOc','px)','textContent','overlay1','none','submit','.toggle','382151rEvdCW','search-container','689RSWAPk','.movie-item','<%=\x20url\x20%>','sidebar','target'];_0x16c7=function(){return _0x5900ca;};return _0x16c7();}const url=_0x3b26e2(0x17a),DataLiminId=_0x3b26e2(0x148);document[_0x3b26e2(0x17d)](_0x3b26e2(0x16b),function(){var _0x1cc6d2=_0x3b26e2;const _0x415a09=document[_0x1cc6d2(0x15f)](_0x1cc6d2(0x147));_0x415a09[_0x1cc6d2(0x17d)](_0x1cc6d2(0x156),function(_0xc4e9ca){var _0x22e338=_0x1cc6d2;if(_0xc4e9ca[_0x22e338(0x17c)]&&_0xc4e9ca[_0x22e338(0x17c)][_0x22e338(0x161)](_0x22e338(0x164))){const _0x411496=_0xc4e9ca['target'][_0x22e338(0x187)](_0x22e338(0x192));if(_0x411496){const _0x1fbb27=_0x411496[_0x22e338(0x15f)](_0x22e338(0x15b));if(_0x1fbb27){const _0x2539b8=_0x1fbb27['innerText'],_0x9d65a5=url+_0x22e338(0x167)+encodeURIComponent(_0x2539b8);window[_0x22e338(0x199)][_0x22e338(0x1a6)]=_0x9d65a5;}else console[_0x22e338(0x186)](_0x22e338(0x166));}}});}),document[_0x3b26e2(0x17d)](_0x3b26e2(0x156),function(_0x39bcab){var _0x505476=_0x3b26e2;_0x39bcab[_0x505476(0x17c)]&&_0x39bcab[_0x505476(0x17c)][_0x505476(0x161)](_0x505476(0x16a))&&(window[_0x505476(0x199)][_0x505476(0x1a6)]=url+_0x505476(0x157));});function showResultsOverlay(){var _0x52544a=_0x3b26e2;document['getElementById'](_0x52544a(0x180))[_0x52544a(0x160)][_0x52544a(0x169)]=_0x52544a(0x168);}function hideResultsOverlay(){var _0x487e7c=_0x3b26e2;document[_0x487e7c(0x190)](_0x487e7c(0x180))[_0x487e7c(0x160)]['display']='none';}document['getElementById'](_0x3b26e2(0x15d))[_0x3b26e2(0x17d)]('submit',function(_0x37a0b1){var _0x1d5fc8=_0x3b26e2;const _0x5f54d9=document[_0x1d5fc8(0x190)](_0x1d5fc8(0x197))[_0x1d5fc8(0x1aa)][_0x1d5fc8(0x15a)]();_0x5f54d9===''&&(_0x37a0b1[_0x1d5fc8(0x189)](),document[_0x1d5fc8(0x190)](_0x1d5fc8(0x197))['select']());}),document[_0x3b26e2(0x17d)]('DOMContentLoaded',function(){var _0x5cc825=_0x3b26e2,_0x5bd176=document[_0x5cc825(0x184)](_0x5cc825(0x18a)),_0x1a0393=document[_0x5cc825(0x184)](_0x5cc825(0x162)),_0x191f94=document['querySelectorAll'](_0x5cc825(0x1a9)),_0x3d068f=document[_0x5cc825(0x184)](_0x5cc825(0x150));_0x1a0393['forEach'](function(_0x2784f1){var _0x4a00e9=_0x5cc825;_0x2784f1[_0x4a00e9(0x17d)]('click',function(){var _0x4fd27a=_0x4a00e9;this['classList'][_0x4fd27a(0x14e)](_0x4fd27a(0x151));});}),_0x191f94[_0x5cc825(0x18e)](function(_0x23a703){var _0x1539ac=_0x5cc825;_0x23a703[_0x1539ac(0x17d)]('click',function(){var _0x19539b=_0x1539ac;this['classList'][_0x19539b(0x14e)](_0x19539b(0x151));});}),_0x3d068f['forEach'](function(_0x2053e8){var _0x220cf9=_0x5cc825;_0x2053e8[_0x220cf9(0x17d)](_0x220cf9(0x156),function(){var _0x54720a=_0x220cf9;this['classList']['toggle'](_0x54720a(0x151));});}),_0x5bd176[_0x5cc825(0x18e)](function(_0xd43591){var _0x5385b3=_0x5cc825;_0xd43591[_0x5385b3(0x17d)](_0x5385b3(0x156),function(){var _0x545b5c=_0x5385b3;this[_0x545b5c(0x1ac)][_0x545b5c(0x14e)]('selected');});});}),document[_0x3b26e2(0x17d)]('DOMContentLoaded',function(){var _0x4cce5=_0x3b26e2,_0x49e056=document[_0x4cce5(0x15f)](_0x4cce5(0x18f)),_0x19fc0c=document[_0x4cce5(0x190)](_0x4cce5(0x172)),_0x228948=document['querySelectorAll'](_0x4cce5(0x18a)),_0x28d522=document[_0x4cce5(0x184)](_0x4cce5(0x162)),_0x2734d5=document[_0x4cce5(0x184)](_0x4cce5(0x1a9)),_0x1d4028=document['querySelectorAll'](_0x4cce5(0x150));_0x49e056['addEventListener'](_0x4cce5(0x156),function(){var _0x409620=_0x4cce5;_0x19fc0c['style'][_0x409620(0x169)]=_0x409620(0x168);}),_0x19fc0c[_0x4cce5(0x17d)](_0x4cce5(0x156),function(_0x5773b9){var _0x689199=_0x4cce5;_0x5773b9[_0x689199(0x17c)]===_0x19fc0c&&(_0x19fc0c[_0x689199(0x160)][_0x689199(0x169)]=_0x689199(0x173),_0x28d522[_0x689199(0x18e)](function(_0x211aca){var _0x2a5193=_0x689199;_0x211aca['classList'][_0x2a5193(0x181)]('selected');}),_0x2734d5[_0x689199(0x18e)](function(_0x273112){var _0x3cb143=_0x689199;_0x273112[_0x3cb143(0x1ac)]['remove'](_0x3cb143(0x151));}),_0x1d4028['forEach'](function(_0x44e0fd){var _0x374de2=_0x689199;_0x44e0fd[_0x374de2(0x1ac)][_0x374de2(0x181)](_0x374de2(0x151));}),_0x228948['forEach'](function(_0x90ac17){var _0x3c9c2f=_0x689199;_0x90ac17[_0x3c9c2f(0x1ac)][_0x3c9c2f(0x181)]('selected');}));});}),document['addEventListener']('DOMContentLoaded',function(){var _0x309af9=_0x3b26e2;const _0x41a140=document[_0x309af9(0x15f)]('.filter-start');_0x41a140['addEventListener']('click',function(){var _0x4f11a0=_0x309af9;const _0xa78619=Array['from'](document[_0x4f11a0(0x184)](_0x4f11a0(0x15e)))['map'](_0x4b0bfe=>_0x4b0bfe[_0x4f11a0(0x171)]),_0x2f0e14=Array['from'](document[_0x4f11a0(0x184)](_0x4f11a0(0x17e)))['map'](_0x24bcb3=>_0x24bcb3[_0x4f11a0(0x171)]),_0x213060=Array['from'](document[_0x4f11a0(0x184)]('.country.selected'))[_0x4f11a0(0x158)](_0x54df41=>_0x54df41[_0x4f11a0(0x171)]),_0x4ac56a=Array[_0x4f11a0(0x19f)](document[_0x4f11a0(0x184)](_0x4f11a0(0x154)))[_0x4f11a0(0x158)](_0x290c4e=>_0x290c4e[_0x4f11a0(0x171)]);console[_0x4f11a0(0x149)](_0x4ac56a);const _0x3ce253=_0xa78619['join']('-'),_0x105ddf=_0x2f0e14['join']('-'),_0x22af5a=_0x213060[_0x4f11a0(0x15c)]('-'),_0x44db97=_0x4ac56a[_0x4f11a0(0x15c)]('-'),_0x497492='/filter?type='+_0x44db97+_0x4f11a0(0x1ab)+_0x3ce253+_0x4f11a0(0x152)+_0x105ddf+_0x4f11a0(0x1a3)+_0x22af5a+'&page='+0x1;window['location'][_0x4f11a0(0x1a6)]=_0x497492;});});function submitSearchForm(){var _0x3f49fc=_0x3b26e2,_0x38c9f2=document[_0x3f49fc(0x190)]('input_search');if(window[_0x3f49fc(0x1a0)]>0x384&&_0x38c9f2[_0x3f49fc(0x1aa)][_0x3f49fc(0x15a)]()!=='')document[_0x3f49fc(0x190)](_0x3f49fc(0x15d))[_0x3f49fc(0x174)]();else _0x38c9f2[_0x3f49fc(0x1aa)][_0x3f49fc(0x15a)]()==''&&_0x38c9f2['focus']();}document['addEventListener'](_0x3b26e2(0x16b),function(){var _0x268182=_0x3b26e2;document['getElementById'](_0x268182(0x14a))[_0x268182(0x160)][_0x268182(0x169)]=_0x268182(0x173);}),window[_0x3b26e2(0x17d)](_0x3b26e2(0x188),function(){var _0x1cf274=_0x3b26e2;document[_0x1cf274(0x190)](_0x1cf274(0x14a))['style']['display']=_0x1cf274(0x168);}),document[_0x3b26e2(0x17d)](_0x3b26e2(0x16b),function(){var _0xf11f5c=_0x3b26e2,_0x74de5=document['querySelector'](_0xf11f5c(0x175)),_0x86227a=document['getElementById'](_0xf11f5c(0x17b)),_0x25df11=!![];_0x74de5[_0xf11f5c(0x1a5)]=function(){var _0x32c9da=_0xf11f5c;if(_0x25df11==!![])document[_0x32c9da(0x15f)]('.toggle\x20span')['classList'][_0x32c9da(0x16d)]('toggle'),_0x86227a[_0x32c9da(0x1ac)][_0x32c9da(0x16d)](_0x32c9da(0x18b)),_0x25df11=![];else _0x25df11==![]&&(document[_0x32c9da(0x15f)](_0x32c9da(0x19e))['classList'][_0x32c9da(0x181)]('toggle'),_0x86227a[_0x32c9da(0x1ac)]['remove']('sidebarshow'),_0x25df11=!![]);},document['addEventListener'](_0xf11f5c(0x156),function(_0x543d21){var _0x4c33d6=_0xf11f5c;!_0x86227a[_0x4c33d6(0x196)](_0x543d21['target'])&&_0x543d21[_0x4c33d6(0x17c)]!==_0x74de5&&(_0x86227a['classList'][_0x4c33d6(0x181)](_0x4c33d6(0x18b)),_0x25df11=!![],document['querySelector']('.toggle\x20span')[_0x4c33d6(0x1ac)]['remove']('toggle'));});}),document[_0x3b26e2(0x17d)](_0x3b26e2(0x16b),function(){var _0x1817ba=_0x3b26e2;const _0x58cb91=document['getElementById'](_0x1817ba(0x177)),_0x30a872=document[_0x1817ba(0x15f)](_0x1817ba(0x183));_0x30a872['addEventListener'](_0x1817ba(0x156),function(){var _0x27ea4e=_0x1817ba;window[_0x27ea4e(0x1a0)]<0x384&&(_0x58cb91[_0x27ea4e(0x1ac)]['toggle'](_0x27ea4e(0x19c)),document['getElementById']('results-overlay')['style'][_0x27ea4e(0x169)]=_0x27ea4e(0x173));});}),document['addEventListener'](_0x3b26e2(0x16b),function(){var _0x3ad44d=_0x3b26e2,_0x23aa44=document[_0x3ad44d(0x184)](_0x3ad44d(0x179));_0x23aa44[_0x3ad44d(0x18e)](function(_0x5e6ab7){var _0xd09edc=_0x3ad44d,_0x559f8d=_0x5e6ab7[_0xd09edc(0x15f)](_0xd09edc(0x19b)),_0x45aed6=_0x5e6ab7[_0xd09edc(0x15f)]('.movie-thumbnail');_0x559f8d&&_0x45aed6&&(_0x559f8d['style'][_0xd09edc(0x169)]=_0xd09edc(0x168),_0x45aed6[_0xd09edc(0x19d)]=function(){var _0x5d74c0=_0xd09edc;_0x559f8d['style'][_0x5d74c0(0x169)]=_0x5d74c0(0x173);},_0x45aed6['complete']&&(_0x559f8d['style']['display']=_0xd09edc(0x173)));});}),document['addEventListener'](_0x3b26e2(0x16b),function(){var _0x1eb874=_0x3b26e2;function _0x5dd3cd(){return'low';}var _0x17065c=_0x5dd3cd();if(_0x17065c===_0x1eb874(0x14c)){var _0x3e12ab=document[_0x1eb874(0x184)](_0x1eb874(0x194));_0x3e12ab[_0x1eb874(0x18e)](function(_0x517adb){var _0x13c83c=_0x1eb874,_0x380376=_0x517adb[_0x13c83c(0x15f)](_0x13c83c(0x1a1)),_0xf37583=_0x517adb[_0x13c83c(0x184)](_0x13c83c(0x16e)),_0x1a792f=0x3e8,_0xd4e7a4=_0xf37583[_0x13c83c(0x1a7)]*_0x1a792f;_0x380376[_0x13c83c(0x160)]['display']='block',setTimeout(function(){var _0x449583=_0x13c83c;_0x380376[_0x449583(0x160)][_0x449583(0x169)]=_0x449583(0x173);},Math['max'](0x3e8,_0xd4e7a4));});}}),document[_0x3b26e2(0x17d)](_0x3b26e2(0x16b),function(){var _0x1ec0cc=_0x3b26e2;function _0x167a90(){return'low';}var _0x2cdd87=_0x167a90();if(_0x2cdd87===_0x1ec0cc(0x14c)){var _0x21f901=document[_0x1ec0cc(0x184)](_0x1ec0cc(0x194));_0x21f901[_0x1ec0cc(0x18e)](function(_0x31dcc7){var _0x2d06f1=_0x1ec0cc,_0x2f1844=_0x31dcc7['querySelector']('.preloader3'),_0x1c2663=_0x31dcc7[_0x2d06f1(0x184)](_0x2d06f1(0x16e)),_0x19457d=0x3e8,_0x585f27=_0x1c2663[_0x2d06f1(0x1a7)]*_0x19457d;_0x2f1844[_0x2d06f1(0x160)][_0x2d06f1(0x169)]=_0x2d06f1(0x168),setTimeout(function(){var _0xde7aba=_0x2d06f1;_0x2f1844['style'][_0xde7aba(0x169)]=_0xde7aba(0x173);},Math[_0x2d06f1(0x182)](0x3e8,_0x585f27));});}}),document[_0x3b26e2(0x17d)](_0x3b26e2(0x16b),function(){var _0x2afc5d=_0x3b26e2,_0x4bd0e0=document[_0x2afc5d(0x184)]('.movie-list1');_0x4bd0e0[_0x2afc5d(0x18e)](function(_0x39a313){var _0x45abc1=_0x2afc5d,_0x1cdefd=_0x39a313['querySelector'](_0x45abc1(0x16c)),_0x2b2d29=_0x39a313[_0x45abc1(0x15f)]('.movie-container');_0x1cdefd[_0x45abc1(0x160)][_0x45abc1(0x169)]=_0x45abc1(0x168),_0x2b2d29['onload']=function(){var _0x3b1e3f=_0x45abc1;_0x1cdefd[_0x3b1e3f(0x160)][_0x3b1e3f(0x169)]=_0x3b1e3f(0x173);};});});
