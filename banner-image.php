<?php
/**
 * The template for displaying posts in the Video Post Format on index and archive pages
 *
 * Learn more: http://codex.wordpress.org/Post_Formats
 *
 */
?>

<?php $poster = get_post_meta($post->ID, 'poster_value', $single = true)  ?>

<li> 
	<img id="event<?php the_ID(); ?>" alt="<?php the_title(); ?>" src="<?php echo $poster; ?>"></img>' +
</li>    
    
    
    