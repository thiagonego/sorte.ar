jQuery(document).ready(function(){
	jQuery('#buscar').on('click',function(){
		jQuery.post('/buscar', {username: jQuery("#buscar-query").val()}, function(data){
			if(data){
				console.log(data);
				jQuery('#instagram-buscar').removeClass('hide');
				jQuery('#instagram-buscar').pongstgrm({
				    accessId: jQuery('#dados').data('client-id'),
				    accessToken: jQuery('#dados').data('usuario-logado').access_token,
				    column: 'col-xs-12 col-md-4 col-sm-3 col-lg-2',  // you use customized columns
				    count: 20,                      // set the number of media to display
				    user_id: data[0].id,
				    show: 'recentes'
				});					
			}
		});	
	});
});