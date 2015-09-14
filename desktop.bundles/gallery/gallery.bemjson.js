module.exports = {
    block: 'page',
    title: 'gallery',
    head: [
        { elem: 'css', url: 'gallery.css' }
    ],
    scripts: [{ elem: 'js', url: 'gallery.js' }],
    content: [
	{
		block: 'content',
		content: [
			{
				block: 'viewer',
				content: [
					{
						block: 'image',
						url: 'gallery_images/1.jpg',
						alt: 'хм, вообще-то здесь должна быть картинка',
						mods: { selected: 'true', totalalign: 'center'},
						attrs: { 'id': 'selectedImage'}
					},
					{
					//!TODO возможно, с тчк зрения БЭМа, здесь должен быть блок navbuttons с элементами next и previous
						block: 'next',
						mix: [ { block: 'navbutton'} ],
						attrs: { 'id': 'nextPicture'},
						content: [
							{
								block: 'image',
								url: 'images/next.png',
								alt: 'Следующая картинка',
								mods: { totalalign: 'center' }
							}
						]
					},
					{
						block: 'previous',
						mix: [ { block: 'navbutton'} ],
						attrs: { 'id': 'previousPicture'},
						content: [
							{
								block: 'image',
								url: 'images/previous.png',
								alt: 'Предыдущая картинка',
								mods: { totalalign: 'center' }
							}
						]
					}
				]
			}
		]
	}]
};
