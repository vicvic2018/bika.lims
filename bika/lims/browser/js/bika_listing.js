jQuery( function($) {

	// All actions in the folderContentsForm will refresh only the content table.

	$(document).ready(function(){


		function inplace_submit(){
			options = {target: '#folderlisting-main-table',
			           replaceTarget: true,
					   success: function(){
							$('#filter_input_keypress').remove();
							$('#review_state_clicked').remove();
					   }
				      }
			form = $('#folderContentsForm');
			form.ajaxSubmit(options);
		}

		$(".folderlisting-filter").live('keyup', function(key){
			if(key.which == 13) {
				$('#folderContentsForm').append("<input type='hidden' value='1' name='filter_input_keypress' id='filter_input_keypress'/>");
				inplace_submit();
			}
		})

		$(".review_state_filter").live('change', function(){
			$('#folderContentsForm').append("<input type='hidden' value='1' name='review_state_clicked' id='review_state_clicked'/>");
			inplace_submit();
		});

		$("#clear_filters").live('click', function(){
			$('#folderContentsForm').append("<input type='hidden' value='1' name='clear_filters' id='clear_filters'/>");
			inplace_submit();
			$("#clear_filters").toggle(false);
		})

		$("#folderContentsForm").submit(function(){
			inplace_submit();
		})
	});
});
