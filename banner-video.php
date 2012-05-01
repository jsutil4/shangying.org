<?php
/**
 * The template for displaying posts in the Video Post Format on index and archive pages
 *
 * Learn more: http://codex.wordpress.org/Post_Formats
 *
 */
?>

<?php $trailer = get_post_meta($post->ID, 'trailer_value', $single = true)  ?>
<?php $poster = get_post_meta($post->ID, 'poster_value', $single = true)  ?>

<li class="video">
    <div id="event<?php the_ID(); ?>_wrapper">
        <object width="100%" height="100%" type="application/x-shockwave-flash" data="<?php echo get_template_directory_uri(); ?>/swf/jw_player.swf" bgcolor="#000000" id="event<?php the_ID(); ?>" name="event<?php the_ID(); ?>" tabindex="0">
            <param name="allowfullscreen" value="true">
            <param name="allowscriptaccess" value="always">
            <param name="seamlesstabbing" value="true">
            <param name="wmode" value="opaque">
            <param name="flashvars" value="mute=true&repeat=always&stretching=exactfit&autostart=true&controlbar.position=none&display.icons=false&dock=false">
        </object>
    </div>
    <script>
        jwplayer("event<?php the_ID(); ?>").setup({
            "flashplayer": "<?php echo get_template_directory_uri(); ?>/swf/jw_player.swf",
            "file": "<?php echo $trailer; ?>",
            "image": "<?php echo $poster; ?>",
            "controlbar": "none",
            "dock": false,
            "icons": false,
            "mute": "true",
            "repeat": "always",
            "stretching": "exactfit",
            "width": "1015",
            "height": "565",
            "autostart": 'true'
        });
    </script>
</li>
    
    
    