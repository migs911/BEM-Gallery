modules.define('previous', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this.bindTo('click', function() {
						selectedImage.src = selectedImage.src.replace(/(.*gallery_images\/)(\d*)(\.jpg)/, previousImagePath);
						previousPicture.style.display = isFirstPicture() ? 'none' : 'block';
						nextPicture.style.display = isLastPicture() ? 'none' : 'block';
					});
                }
            }
        }
    }));
}); 

// !TODO на серверной стороне генерировать упорядоченный список 
// картинок, а не работать с названием файла
function isFirstPicture(){
	return selectedImage.src.search('/1.jpg') == -1 ? false : true;
}

function previousImagePath(str, dir, filename, ext, offset, s) {
	return dir + --filename + ext;
}