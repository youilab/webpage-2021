$(document).ready(function(){
    
    fetch('Assets/js/projects_database.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let url = window.location.href 
        let IndexProject = url.substring(url.lastIndexOf('?id=')+4);
        //console.log(tamanio + data[IndexProject].content[0][0].type);
        let project = $('.project');
        let titleProject = $('<h1></h1>').text(data[IndexProject].title.toUpperCase());
        window.document.title =data[IndexProject].title +" | You-i Lab";
        project.append(titleProject);
        let sectionName = [];
        let sectionNameSub= [];
        

        


        for(let i=0; i<data[IndexProject].contentProject.length; i++){
            console.log(data[IndexProject].contentProject.length);
             sectionName[i] = $('<div></div>').attr('class', 'sectionProject');
                project.append(sectionName[i]);
            if (data[IndexProject].contentProject[i][0].type=='image'){
                Typeimage(data[IndexProject].contentProject, i);
                if (data[IndexProject].contentProject[i][1]) {
                    TypeSelction(data[IndexProject].contentProject, i);
                }

            }else if (data[IndexProject].contentProject[i][0].type=='video'){
                   
                    Typevideo(data[IndexProject].contentProject, i);
                    if (data[IndexProject].contentProject[i][1]) {
                        TypeSelction(data[IndexProject].contentProject, i);
                    }
                    
            }else if (data[IndexProject].contentProject[i][0].type=='iframe'){
                   
                    Typeiframe(data[IndexProject].contentProject,i);
                    if (data[IndexProject].contentProject[i][1]) {
                        TypeSelction(data[IndexProject].contentProject, i);
                    }
            }else if(data[IndexProject].contentProject[i][0].type=='text'){
                Typetext(data[IndexProject].contentProject,i);
            }
                 //button  Type 
             if (data[IndexProject].contentProject[i][0].type=='button'){
                
                Typebutton(data[IndexProject].contentProject,i);
                //gallery  Type 
            }else if(data[IndexProject].contentProject[i][0].type=='gallery'){
                Typegallery(data[IndexProject].contentProject,i);

            }else if (data[IndexProject].contentProject[i][0].type=='container'){
                let item = $('<div></div>').attr('class', 'item');
                sectionName[i].append(item);
                sectionName[i].attr('class', 'card');
                 let image = $('<div></div>').attr('class', 'contImg');
                 image.css('background-image', 'url('+data[IndexProject].contentProject[i][0].image+')'); 
                 item.append(image);
                 let contenido = $('<div></div>').attr('class', 'content');
                 item.append(contenido);
                 let titulo = $('<h1></h1>').text(data[IndexProject].contentProject[i][0].title.toUpperCase());
                 contenido.append(titulo);
                 let description = $('<p></p>').text(data[IndexProject].contentProject[i][0].text);
                 contenido.append(description);
                 let btn = $('<a></a>').attr('class', 'btn').attr('id', i).attr('target', '_blank').text(data[IndexProject].contentProject[i][0].textBtn);
                 contenido.append(btn); 
                 
                 $('#'+i).on('click', function(){
                    const indice = $(this).attr('id');
                    let Subproject = $('<div></div>').attr('class', 'Subproject').attr('id', 'sub'+indice);
                    project.append(Subproject);
                    let Contsubproject = $('<div></div>').attr('class', 'Contsubproject');
                    Subproject.append(Contsubproject);
                    let titleProject = $('<h1></h1>').text(data[IndexProject].contentProject[indice][0].title.toUpperCase());
                    Contsubproject.append(titleProject);
                    
                   
                    var flecha = $('<span></span>').attr('class', 'fa fa-arrow-left');
                    var back = $('<a></a>').attr('class', 'back').text(' BACK');
                     flecha.append(back);
                     Contsubproject.append(flecha);
                    for(let k=0; k<data[IndexProject].contentProject[indice][0].contentProject.length; k++){
                        sectionNameSub[i] = $('<div></div>').attr('class', 'sectionProject');
                        Contsubproject.append(sectionNameSub[i]);
                        console.log(sectionNameSub);
                    if (data[IndexProject].contentProject[indice][0].contentProject[k][0].type=='image'){
                            Typeimage(data[IndexProject].contentProject[indice][0].contentProject, k, true, i);
                            TypeSelction(data[IndexProject].contentProject[indice][0].contentProject, k, true, i);
                    }else if (data[IndexProject].contentProject[indice][0].contentProject[k][0].type=='video'){
                            Typevideo(data[IndexProject].contentProject[indice][0].contentProject, k, true, i);
                            TypeSelction(data[IndexProject].contentProject[indice][0].contentProject, k, true, i);
                     }else if (data[IndexProject].contentProject[indice][0].contentProject[k][0].type=='iframe'){
                            Typeiframe(data[IndexProject].contentProject[indice][0].contentProject, k, true, i);
                            TypeSelction(data[IndexProject].contentProject[indice][0].contentProject, k, true, i);
                     }
                     else if (data[IndexProject].contentProject[indice][0].contentProject[k][0].type=='button'){
                     let btn = $('<a></a>').attr('class', 'btn').attr('target', '_blank').text(data[IndexProject].contentProject[indice][0].contentProject[k][0].text).attr('href',data[IndexProject].contentProject[indice][0].contentProject[k][0].url);
                     sectionNameSub[i].append(btn); 
                    }else if(data[IndexProject].contentProject[indice][0].contentProject[k][0].type=='gallery'){
                        let container = $('<div></div>').attr('class', 'swiper-container');
                        Contsubproject.append(container);
                        let wrapper = $('<div></div>').attr('class', 'swiper-wrapper');
                        let next = $('<div></div>').attr('class', 'swiper-button-next');
                        let prev = $('<div></div>').attr('class', 'swiper-button-prev');
                            container.append(wrapper);
                            container.append(next);
                            container.append(prev);
                         var NoImages= data[IndexProject].contentProject[indice][0].contentProject[k][0].images.length;
                         for(var j=0; j<NoImages; j++){
                            let slide = $('<div></div>').attr('class', 'swiper-slide').css('background-image', 'url('+data[IndexProject].contentProject[indice][0].contentProject[k][0].images[j]+')');
                            wrapper.append(slide);
                        }
                        BuildSwiper();
        
                    }
                    }
                    $('.Subproject').on('click', function(){
                            $('.Subproject').css("display", "none");   
                    });
                    
                    $('#sub'+indice).css("display", "block");
                   
                });
                
            }
        }  
        
        function Typeimage(url, i, sub=false, k=0){      
            
            let contFig = $('<div></div>').attr('class', 'contFig');
            if (sub== false){
                sectionName[i].append(contFig);
            }else{
                sectionNameSub[k].append(contFig);
            }
            let image = $('<img>').attr('src', url[i][0].url);
            contFig.append(image);
            if(url[i][1]==null){
                contFig.attr('class', 'Only');
            }
            
        }
        function Typevideo(url, i, sub=false, k=0){
            let contFig = $('<div></div>').attr('class', 'contFig');
            if (sub== false){
                sectionName[i].append(contFig);
            }else{
                sectionNameSub[k].append(contFig);
            }
            
            let video = $('<iframe></iframe>').attr('src', url[i][0].url);
            contFig.append(video);
            if(url[i][1]==null){
                contFig.attr('class', 'Only');
                
            }
        }
        function Typeiframe(url, i, sub=false, k=0){
            let contFig = $('<div></div>').attr('class', 'contFig');
            if (sub== false){
                sectionName[i].append(contFig);
            }else{
                console.log(sectionNameSub)
                sectionNameSub[k].append(contFig);
            }
            let video = $('<iframe></iframe>').attr('src', url[i][0].url);
            contFig.append(video);
            if(url[i][1]==null){
                contFig.attr('class', 'Only');
            }
        }
        function Typebutton(url, i){
            let contFig = $('<div></div>').attr('class', 'contFig');
            sectionName[i].append(contFig);
            let contText = $('<div></div>').attr('class', 'contText');
            sectionName[i].append(contText);
            let btn = $('<a></a>').attr('class', 'btn').attr('target', '_blank').text(url[i][0].text).attr('href',url[i][0].url);
            sectionName[i].append(btn); 
        }
        function Typegallery(url, i){
            let container = $('<div></div>').attr('class', 'swiper-container');
                project.append(container);
            let wrapper = $('<div></div>').attr('class', 'swiper-wrapper');
            let next = $('<div></div>').attr('class', 'swiper-button-next');
            let prev = $('<div></div>').attr('class', 'swiper-button-prev');
                container.append(wrapper);
                container.append(next);
                container.append(prev);
             var NoImages=data[IndexProject].contentProject[i][0].images.length;
             for(var j=0; j<NoImages; j++){
                    let slide = $('<div></div>').attr('class', 'swiper-slide').css('background-image', 'url('+url[i][0].images[j]+')');
                    wrapper.append(slide);
            }
            BuildSwiper();
        }
        function Typetext(url, i){
            var contText = $('<div></div>').attr('class', 'contText');
            var text = $('<p></p>').text(url[i][0].text);
            sectionName[i].append(contText);
            contText.append(text);
            contText.css("width", "100%");
        }

        function TypeSelction(url, i , sub=false, k=0){
            key= url[i][1].type
            switch (key) {
                case 'image':
                    var contFig2 = $('<div></div>').attr('class', 'contFig');
                    if (sub== false){
                        sectionName[i].append(contFig2);
                    }else{
                        console.log(sectionNameSub)
                        sectionNameSub[k].append(contFig2);
                    }
                    var image = $('<img>').attr('src', url[i][1].url);
                    contFig2.append(image)
                break;
                case 'video':
                    var contFig2 = $('<div></div>').attr('class', 'contFig');
                    if (sub== false){
                        sectionName[i].append(contFig2);
                    }else{
                        console.log(sectionNameSub)
                        sectionNameSub[k].append(contFig2);
                    }
                    var video = $('<iframe></iframe>').attr('src', url[i][1].url);
                    contFig2.append(video);
                break;
                case 'iframe':
                    var contFig2 = $('<div></div>').attr('class', 'contFig');
                    if (sub== false){
                        sectionName[i].append(contFig2);
                    }else{
                        console.log(sectionNameSub)
                        sectionNameSub[k].append(contFig2);
                    }
                    var video = $('<iframe></iframe>').attr('src', url[i][1].url);
                    contFig2.append(video);
                break;
                case 'text':
                    var contText = $('<div></div>').attr('class', 'contText');
                    var text = $('<p></p>').text(url[i][1].text);
                    if (sub== false){
                        sectionName[i].append(contText);
                    }else{
                        console.log(sectionNameSub)
                        sectionNameSub[k].append(contText);
                    }
                    contText.append(text)
                break;
                default:
                    break;
            }
        }

        
    })


    
});
    