modules.define('next', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this.bindTo('click', function() {
						selectedImage.src = selectedImage.src.replace(/(.*gallery_images\/)(\d*)(\.jpg)/, nextImagePath);
						nextPicture.style.display = isLastPicture() ? 'none' : 'block';
						previousPicture.style.display = isFirstPicture() ? 'none' : 'block';
					});
                }
            }
        }
    }));
}); 

// !TODO на серверной стороне генерировать упорядоченный список 
// картинок, а не работать с названием файла
function isLastPicture(){
	return selectedImage.src.search('/21.jpg') == -1 ? false : true;
}

function nextImagePath(str, dir, filename, ext, offset, s) {
	return dir + ++filename + ext;
}

// !TODO в navgallery.bemhtml почему-то не срабатывает "block('navgallery').elem('photo').js()('true')"
// НЕ БЭМ! В ручную написанная фунцкия дла обработки событий onclick в элементах navgallery__photo
function openBigPhoto(navgalleryPhotoSource) {	
	selectedImage.src = navgalleryPhotoSource.replace('gallery_preview', 'gallery_images');
	previousPicture.style.display = isFirstPicture() ? 'none' : 'block';
	nextPicture.style.display = isLastPicture() ? 'none' : 'block';
}