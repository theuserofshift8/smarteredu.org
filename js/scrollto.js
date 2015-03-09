/**
 * 
 */
$(document)
		.ready(
				function() {
					$("#contactusli")
							.click(
									function() {
										$("html,body").animate(
												{
													scrollTop : $("#contactus")
															.offset().top-80
												}, 800);
										setTimeout(
												function() {
													var gmapnum = $(
															"#googlemap")
															.children().length;
													if (gmapnum == 0) {
														var ifmae = "<iframe src='http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3988.816032089416!2d103.85195500000002!3d1.2843000000000149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1909351f4293%3A0xce3e2480ec0629d!2zQ2hldnJvbiBIb3VzZSwgMzAgUmFmZmxlcyBQbCwg5paw5Yqg5Z2hIDA0ODYyMg!5e0!3m2!1szh-CN!2scn!4v1422955435763' width='525' height='415' frameborder='0' style='border: 0'></iframe>";
														$("#googlemap").append(
																ifmae);
													}
													var gmapknlnum = $("#map1")
															.children().length;
													if (gmapknlnum == 0) {
														var knl = "<iframe src='http://www.google.cn/maps/embed?pb=!1m14!1m8!1m3!1d3411.0977578104003!2d121.454993!3d31.245717000000024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270251048047b%3A0xe23058d6987b4db6!2z5aSp55uu6KW_6LevMjkw5Y-3IOS4iua1t-W4gumXuOWMl-WMuueBq-i9puermemCruaUv-e8lueggTogMjAwMDAw!5e0!3m2!1szh-CN!2scn!4v1423126213646' width='525' height='415' frameborder='0' style='border:0'></iframe>";
														$("#map1").append(knl);
													}
												}, 2000);

									});

					$(window)
							.scroll(
									function() {
										var contactuslocation = $('#contactus')
												.offset().top;
										var scrolllocation = $(document)
												.scrollTop();
										if (scrolllocation >= contactuslocation - 500) {
											var gmapnum = $("#googlemap")
													.children().length;
											if (gmapnum == 0) {
												var ifmae = "<iframe src='http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3988.816032089416!2d103.85195500000002!3d1.2843000000000149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1909351f4293%3A0xce3e2480ec0629d!2zQ2hldnJvbiBIb3VzZSwgMzAgUmFmZmxlcyBQbCwg5paw5Yqg5Z2hIDA0ODYyMg!5e0!3m2!1szh-CN!2scn!4v1422955435763' width='525' height='415' frameborder='0' style='border: 0'></iframe>";
												$("#googlemap").append(ifmae);
											}
											var gmapknlnum = $("#map1")
													.children().length;
											if (gmapknlnum == 0) {
												var knl = "<iframe src='http://www.google.cn/maps/embed?pb=!1m14!1m8!1m3!1d3411.0977578104003!2d121.454993!3d31.245717000000024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270251048047b%3A0xe23058d6987b4db6!2z5aSp55uu6KW_6LevMjkw5Y-3IOS4iua1t-W4gumXuOWMl-WMuueBq-i9puermemCruaUv-e8lueggTogMjAwMDAw!5e0!3m2!1szh-CN!2scn!4v1423126213646' width='525' height='415' frameborder='0' style='border:0'></iframe>";
												$("#map1").append(knl);
											}
										}
									});

				});
function scrollto(todiv) {

	$("html,body").animate({
		scrollTop : $("#" + todiv).offset().top-80
	}, 800);

}