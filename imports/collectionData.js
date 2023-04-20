Template.collectionData.helpers({
    jokes: function() {
      return Jokes.find();
    }
  });
  Template.collectionData.events({
    'click .delete-joke': function(event, template) {
      var jokeId = $(event.currentTarget).attr('data-id');
      Jokes.remove(jokeId);
    }
  });

$(function(){
	$(document).one('click', '.like-review', function(e) {
		$(this).html('<i class="bi bi-hand-thumbs-up"aria-hidden="true"></i> You liked this');
		$(this).children('.bi bi-hand-thumbs-up').addClass('animate-like');
	});
});

