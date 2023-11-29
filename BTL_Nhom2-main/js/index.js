$(document).ready(function(){
    let heightBar = $("#topbar").height();

    $(window).scroll(function() {
        if($("#topbar").hasClass("hide-topbar")) {
            setTimeout(function(){ 
                $("#header.affix-mobile").css({ top: 0 });
            }, 100);
        }else {
            setTimeout(function(){ 
                $("#header.affix-mobile").css({ top: heightBar });
            }, 100);
        }
    });

    $("#close_topbar").click(function(e){
        e.preventDefault();
        $("#topbar").toggleClass("hide-topbar");
        $("#header.affix-mobile").css({ top: 0 });
    })



	$('.ultimate-search').submit(function(e) {

		e.preventDefault();
	
		var q = $(this).find('input[name=q]').val();
	
		if( ! q ) {
			window.location = '/search?type=product&q=**';
			return;
		}
		else{
			window.location = '/search?type=product&q=' + q;
			return;
		}
	});
	
	function selectSuggest(act){
	
		cur = $('.smart-search-wrapper > .select').index();
	
		length = $('.smart-search-wrapper > a').length;
	
		if (act == 38)
		{
	
			if (cur == -1 || cur == 0)
	
				cur = length - 1;				
	
			else
	
				cur = cur - 1;
	
		}
	
	
		if (act == 40)
		{
	
			if (cur == -1 || cur == length - 1)
	
				cur = 0;				
	
			else
	
				cur = cur + 1;
		}
	
		$('.smart-search-wrapper>a').removeClass('select');
	
		$('.smart-search-wrapper>a:nth-child('+ ( cur + 1)+')').addClass('select');
	
	
		$('.ultimate-search input[name=q]').val($('.smart-search-wrapper>.select').attr('data-title'));
		return false;
	}
	
	
	(function($) {
		$.fn.smartSearch = function(_option) {
	
	
			var o, issending = false,
	
					timeout = null;
	
			var option = {
				smartoffset: true, //auto calc offset
	
				searchoperator: '**', //** contain, *= begin with, =* end with
	
				searchfield: "title",
	
				searchwhen: 'keyup', //0: after keydown, 1: after keypress, after space
	
				searchdelay: 500, //delay time before load data
	
			};
	
			if (typeof(_option) !== 'undefined') {
	
				$.each(_option, function(i, v) {
	
					if (typeof(_option[i]) !== 'undefined') option[i] = _option[i];
	
				})
			}
	
			o = $(this);
	
			o.attr('autocomplete', 'off');
	
			this.bind(option.searchwhen, function(event) {
	
				if (event.keyCode == 38 || event.keyCode == 40) {
	
					return selectSuggest(event.keyCode);
	
				} else {
	
					$(".smart-search-wrapper." + option.wrapper).remove();
	
					clearTimeout(timeout);
	
					timeout = setTimeout(l, option.searchdelay, $(this).val());
	
				}
	
			});     
	
			var l = function(t) {
	
				if (issending) return this;
	
				issending = true;
	
				coll=''
	
				if(option.collection != null)
	
					coll= $(option.collection).val() + "&&";
	
				$.ajax({
	
					url: "/search?q=filter=(" + coll + "(" + option.searchfield + ":product" + option.searchoperator + t + "))&view=ultimate-search",
	
					dataType: "JSON",
	
					async: false,
	
					success: function(data) {
	
						if( $('.smart-search-wrapper.' + option.wrapper).length == 0 ) {
	
							$('body').append("<div class='smart-search-wrapper "  + option.wrapper + "'></div>");
	
						}
	
						p();
	
						$.each(data, function(i, v) {
	
							$(".smart-search-wrapper." + option.wrapper).append("<a data-title='"+ v.title + "'class='thumbs' href='" + v.url + "'> <img src='"+Haravan.resizeImage(v.featured_image, 'icon')+"'/></a><a data-title='"+ v.title + "' href='" + v.url + "'>" + v.title + "<span class='price-search'>"+Haravan.formatMoney(v.price, '')+"đ</span></a>");
	
						});
	
						issending = false;
	
					},
	
					error: function (xhr, ajaxOptions, thrownError) {
	
						//alert(xhr.status);
	
						//alert(thrownError);
	
					}
	
				});
	
			}
	
			$(window).resize(function() {
	
				p();
	
			});
	
			$(window).scroll(function() {
	
				p();
	
			});
	
			$(this).blur(function(){
	
			$('.smart-search-wrapper.' + option.wrapper).slideUp();
	
			});
	
			var p = function() {
	
				if( ! o.offset() ) {
	
					return;
	
				}
	
	
				$(".smart-search-wrapper." + option.wrapper).css("width", o.outerWidth() + "px");
	
				$(".smart-search-wrapper." + option.wrapper).css("left", o.offset().left + "px");
	
				if (option.smartoffset) {
	
	
					h = $(".smart-search-wrapper." + option.wrapper).height();
	
					if (h + o.offset().top - $(window).scrollTop() + o.outerHeight() > $(window).height()) {
	
						$(".smart-search-wrapper." + option.wrapper).css('top', '');
	
	
						$(".smart-search-wrapper." + option.wrapper).css('bottom', ($(window).scrollTop() + $(window).height() - o.offset().top) + "px");
	
					} else {
	
						$(".smart-search-wrapper." + option.wrapper).css('bottom', '');
	
						$(".smart-search-wrapper." + option.wrapper).css('top', (o.offset().top - $(window).scrollTop() + o.outerHeight()) + "px");
	
					}
	
				} else {
	
					$(".smart-search-wrapper." + option.wrapper).css('top', (o.offset().top - $(window).scrollTop() + o.outerHeight()) + "px");
	
				}
	
			}
	
			return this;
	
		};
	}(jQuery));
	
	
	
	jQuery('.ultimate-search input[name=q]').smartSearch({searchdelay:400, wrapper: 'search-wrapper', collection:'.collection_id'});
	// Get the modal
var hgModalYoutube = document.getElementById('hgModalYoutube');

// Get the button that opens the modal
var hgModalYoutubeBtn = document.getElementById("hgModalYoutubeBtn");

// Get the <span> element that closes the modal
var hgModalYoutubeClose = document.getElementsByClassName("hgmy-close")[0];

// When the user clicks the button, open the modal 
hgModalYoutubeBtn.onclick = function() {
	hgModalYoutube.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
hgModalYoutubeClose.onclick = function() {
	hgModalYoutube.style.display = "none";
	var videoURL = $('#home-video-player').prop('src');
	videoURL = videoURL.replace("?autoplay=1", "");
	$('#home-video-player').prop('src','');
	$('#home-video-player').prop('src',videoURL);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == hgModalYoutube) {
		hgModalYoutube.style.display = "none";
	}
}
// Get the modal
var modalAddComplete = document.getElementById('modalAddComplete');

// Get the button that opens the modal
var modalAddCompleteBtn = document.getElementById("modalAddCompleteBtn");

// When the user clicks the button, open the modal 
modalAddCompleteBtn.onclick = function() {
	modalAddComplete.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modalAddComplete) {
		modalAddComplete.style.display = "none";
	}
}
