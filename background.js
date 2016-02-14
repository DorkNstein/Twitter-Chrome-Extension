$(function(){
	var currentId;
	var i = 0;
	setInterval(GetTweet,2000);

function GetTweet(){
	$.get("https://twitter.com",function(response){
	var xx = $(response).find('li.js-stream-item.stream-item')[0];
	var name = $(xx).find('div').attr('data-name');
	var handle = $(xx).find('div').attr('data-screen-name');
	var ids = $(xx).find('div').attr('data-tweet-id');
	var img = $(xx).find('img').attr('src');
	var msg = $(xx).find('p').text();
	var image = $(xx).find('.AdaptiveMedia-photoContainer img').attr('src');
	console.log(name,image);
		if(!!image){
		var options={
					type: "image",
					title: name+" @"+handle,
					message: msg,
					iconUrl: img,
					imageUrl: image
				}
			}else if(!image){
			 	var options={
					type: "basic",
					title: name+" @"+handle,
					message: msg,
					iconUrl: img
				}
			}

	if(!currentId){
		currentId=ids;

		chrome.notifications.create("'"+i+"'",options,function(){});
	}else if(currentId===ids){

	}else{
		currentId = ids;
		chrome.notifications.create("'"+i+"'",options,function(){});
		i = i+1;

		}

})
}

})

