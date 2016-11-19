$(document).ready(function() {
			$("#gallery_slider").unitegallery({
				gallery_theme: "slider",
				gallery_autoplay: false,
				slider_enable_arrows: false,
				gallery_width: 2560,
				gallery_height: 1589,
				gallery_min_width: 150,
				gallery_min_height: 150,
				gallery_preserve_ratio: true,
				slider_control_zoom: false,
			})
			$("#carousel_info_block").unitegallery({
				tile_textpanel_padding_top: 55,
				tile_textpanel_title_bold: 400,
				tile_textpanel_bg_opacity: 0,
				tile_textpanel_title_font_family: "GreatVibes",
				tile_textpanel_title_font_size: 26,
				tile_textpanel_title_text_align: "center",
				tile_enable_textpanel: true,
				tile_enable_icons: false,
				tile_textpanel_position: "inside_top",
				tile_textpanel_appear_type: "fade",
				gallery_theme: "carousel",
				tile_height: 240,
				tile_width: 228,
				theme_carousel_align: "center",
				carousel_space_between_tiles: 0,
				tile_enable_border: false,
				theme_navigation_position: "top",
				carousel_padding: 0,
			});
			$("#grid_info_block").unitegallery({
				gallery_theme: "tilesgrid",
				tile_enable_shadow:false,
				tile_enable_border:false,
				tile_height: 340,
				tile_width: 262,
				grid_space_between_cols: 30,
				grid_space_between_rows: 45,
				grid_num_rows:10,
			});
			$("#grid_info_block_2").unitegallery({
				gallery_theme: "tilesgrid",
				tile_enable_textpanel: true,
				tile_enable_textpanel: true,
				tile_enable_shadow:false,
				tile_enable_border:false,
				tile_enable_icons: false,
				tile_height: 250,
				tile_width: 370,
				grid_space_between_cols: 30,
			});
		});