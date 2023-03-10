window.onload = function(){
    function removeAll(obj,clName){
        obj.forEach((that)=>{
            that.classList.remove(clName);
        });
    }

    // main - menu
    let menu = document.querySelector('.menu_btn');
    let menupage = document.querySelector('.menu_container');
    let Lmenu = document.querySelectorAll('.large_menu');
    let Smenu = document.querySelectorAll('.small_menu_list');
    
    menu.addEventListener('click', function(){
        menu.classList.toggle('menu_active');
    
        if(menupage.style.display === 'block'){
            menupage.style.display = 'none';
        }else{
            menupage.style.display = 'block';
        }
    });

    Lmenu.forEach((elem,index)=>{
        elem.addEventListener('click',()=>{
            Smenu.forEach((x)=>{
                x.classList.remove('small_menu_list_on');
                if(index == 0){
                    Smenu[index].classList.add('small_menu_list_on');
                }else if(index > 1){
                    Smenu[index-1].classList.add('small_menu_list_on');
                }
            })
        });
    });

    // main - reservation bar
    let fireBtn = document.getElementById('reserv_type');
    let peopleAll = document.querySelectorAll('.count_people');
    let countRoom = document.querySelector('.count_room');
    let countRestarant = document.querySelector('.count_restaurant');
    
    fireBtn.addEventListener('change',()=>{
        countRoom.classList.remove('count_choice_box_on');
        countRestarant.classList.remove('count_choice_box_on');
    })

    peopleAll.forEach((countall,index)=>{
        countall.addEventListener('click',()=>{
            if(index == 0){
                countRoom.classList.toggle('count_choice_box_on');
            }else if(index == 1){
                countRestarant.classList.toggle('count_choice_box_on')
            }
        })
    });

    // main - top button
    let topbtn = document.querySelector('.scroll_top');
    topbtn.addEventListener('click', function(){
        window.scrollTo({
            top:0, 
            left:0, 
            behavior:'smooth'
        });
    })


    // accommodation
    let acmdType = document.querySelectorAll('.type_btn');
    let acmdPic = document.querySelectorAll('.acmd_pic');
    let stanList = document.querySelector('.standard_swip');
    let deluxeList = document.querySelector('.deluxe_swip');
    let suiteList = document.querySelector('.suite_swip');
    let acmdInfo = document.querySelectorAll('.acmd_info');
    let stanInfo = document.querySelector('.info_standard');
    let deluxeInfo = document.querySelector('.info_deluxe');
    let suiteInfo = document.querySelector('.info_suite');

    acmdType.forEach((pic,index)=>{
        pic.addEventListener('click',function(){
            if(index == 0){
                removeAll(acmdPic,'acmd_pic_on');
                stanList.classList.toggle('acmd_pic_on');

                removeAll(acmdInfo,'acmd_info_on');
                stanInfo.classList.toggle('acmd_info_on');
            }else if(index == 1){
                removeAll(acmdPic,'acmd_pic_on')
                deluxeList.classList.toggle('acmd_pic_on');

                removeAll(acmdInfo,'acmd_info_on');
                deluxeInfo.classList.add('acmd_info_on');
            }else if(index == 2){
                removeAll(acmdPic,'acmd_pic_on');
                suiteList.classList.toggle('acmd_pic_on');

                removeAll(acmdInfo,'acmd_info_on');
                suiteInfo.classList.add('acmd_info_on');
            }
        });
    });
    
    // dining 
    let dinType = document.querySelectorAll('.dining_type');
    let picUl = document.querySelector('.dining_pic_list');
    let picUlAfter = window.getComputedStyle(picUl,'::after');
    let picList = document.querySelectorAll('.dining_pic_list_item');
    let picPlatz = document.querySelector('.dining_pic_platz');
    let picKunst = document.querySelector('.dining_pic_kunst');
    let picLuft = document.querySelector('.dining_pic_luft');
    let picRoom = document.querySelector('.dining_pic_room');
    let dinInfo = document.querySelectorAll('.dining_info');
    let infoPlatz = document.querySelector('.dining_info_platz');
    let infoKunst = document.querySelector('.dining_info_kunst');
    let infoLuft = document.querySelector('.dining_info_luft');
    let infoRoom = document.querySelector('.dining_info_room');

    dinType.forEach((dinbtn,index)=>{
        dinbtn.addEventListener('click',function(){
            if(index == 0){
                removeAll(picList,'dining_pic_item_on');
                picPlatz.classList.add('dining_pic_item_on');
                
                removeAll(dinInfo,'dining_info_on');
                infoPlatz.classList.add('dining_info_on');
            }else if(index == 1){
                removeAll(picList,'dining_pic_item_on')
                picKunst.classList.add('dining_pic_item_on');
                
                removeAll(dinInfo,'dining_info_on')
                infoKunst.classList.add('dining_info_on');
            }else if(index == 2){
                removeAll(picList,'dining_pic_item_on');
                picLuft.classList.add('dining_pic_item_on');
                
                removeAll(dinInfo,'dining_info_on');
                infoLuft.classList.add('dining_info_on');
            }else if(index == 3){
                removeAll(picList,'dining_pic_item_on')
                picRoom.classList.add('dining_pic_item_on');
                
                removeAll(dinInfo,'dining_info_on')
                infoRoom.classList.add('dining_info_on');
            };

            for(let i=0; i<dinType.length; i++){
                if(dinType[i].classList.contains('dining_type_on')){
                    dinType[i].classList.remove('dining_type_on');
                }
            }
            dinbtn.classList.add('dining_type_on');

            function curtain(){
                picUl.classList.add('dining_pic_list_on');
                setTimeout(function(){
                    picUl.classList.remove('dining_pic_list_on');
                },900);
            }
            curtain();
        });
    });

};