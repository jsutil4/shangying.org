<?php
/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 584;

/**
 * Tell WordPress to run shangyingorg_setup() when the 'after_setup_theme' hook is run.
 */
add_action( 'after_setup_theme', 'shangyingorg_setup' );

if ( ! function_exists( 'shangyingorg_setup' ) ):

function shangyingorg_setup() {

	/* Make Twenty Eleven available for translation.
	 * Translations can be added to the /languages/ directory.
	 * If you're building a theme based on Twenty Eleven, use a find and replace
	 * to change 'shangyingorg' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'shangyingorg', get_template_directory() . '/languages' );

	$locale = get_locale();
	$locale_file = get_template_directory() . "/languages/$locale.php";
	if ( is_readable( $locale_file ) )
		require_once( $locale_file );

	// This theme styles the visual editor with editor-style.css to match the theme style.
	add_editor_style();

	// Load up our theme options page and related code.
	//require( get_template_directory() . '/inc/theme-options.php' );

	// Grab Twenty Eleven's Ephemera widget.
	//require( get_template_directory() . '/inc/widgets.php' );

	// Add default posts and comments RSS feed links to <head>.
	add_theme_support( 'automatic-feed-links' );
	
	// This theme uses wp_nav_menu() in one location.
	register_nav_menu( 'primary', __( 'Primary Menu', 'shangyingorg' ) );

	// Add support for a variety of post formats
	add_theme_support( 'post-formats', array( 'aside', 'gallery', 'audio', 'video', 'image' ) );
    add_post_type_support( 'projects', 'post-formats' );
    add_theme_support( 'post-thumbnails' ); 
	// Add support for custom backgrounds
	//add_custom_background();

	// This theme uses Featured Images (also known as post thumbnails) for per-post/per-page Custom Header images
	//add_theme_support( 'post-thumbnails' );

	// The next four constants set how Twenty Eleven supports custom headers.

	// The default header text color
	//define( 'HEADER_TEXTCOLOR', '000' );

	// By leaving empty, we allow for random image rotation.
	//define( 'HEADER_IMAGE', '' );

	// The height and width of your custom header.
	// Add a filter to shangyingorg_header_image_width and shangyingorg_header_image_height to change these values.
	//define( 'HEADER_IMAGE_WIDTH', apply_filters( 'shangyingorg_header_image_width', 1000 ) );
	//define( 'HEADER_IMAGE_HEIGHT', apply_filters( 'shangyingorg_header_image_height', 288 ) );

	// We'll be using post thumbnails for custom header images on posts and pages.
	// We want them to be the size of the header image that we just defined
	// Larger images will be auto-cropped to fit, smaller ones will be ignored. See header.php.
	//set_post_thumbnail_size( HEADER_IMAGE_WIDTH, HEADER_IMAGE_HEIGHT, true );

	// Add Twenty Eleven's custom image sizes
	//add_image_size( 'large-feature', HEADER_IMAGE_WIDTH, HEADER_IMAGE_HEIGHT, true ); // Used for large feature (header) images
	//add_image_size( 'small-feature', 500, 300 ); // Used for featured posts if a large-feature doesn't exist

	// Turn on random header image rotation by default.
	//add_theme_support( 'custom-header', array( 'random-default' => true ) );

	// Add a way for the custom header to be styled in the admin panel that controls
	// custom headers. See shangyingorg_admin_header_style(), below.
	//add_custom_image_header( 'shangyingorg_header_style', 'shangyingorg_admin_header_style', 'shangyingorg_admin_header_image' );

}
endif; // shangyingorg_setup

/**
 * Sets the post excerpt length to 40 words.
 *
 * To override this length in a child theme, remove the filter and add your own
 * function tied to the excerpt_length filter hook.
 */
function shangyingorg_excerpt_length( $length ) {
	return 80;
}
add_filter( 'excerpt_length', 'shangyingorg_excerpt_length' );

/**
 * Returns a "Continue Reading" link for excerpts
 */
function shangyingorg_continue_reading_link() {
	return ' <a href="'. esc_url( get_permalink() ) . '">' . __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'shangyingorg' ) . '</a>';
}

/**
 * Replaces "[...]" (appended to automatically generated excerpts) with an ellipsis and shangyingorg_continue_reading_link().
 *
 * To override this in a child theme, remove the filter and add your own
 * function tied to the excerpt_more filter hook.
 */
function shangyingorg_auto_excerpt_more( $more ) {
	return ' &hellip;' . shangyingorg_continue_reading_link();
}
add_filter( 'excerpt_more', 'shangyingorg_auto_excerpt_more' );

/**
 * Adds a pretty "Continue Reading" link to custom post excerpts.
 *
 * To override this link in a child theme, remove the filter and add your own
 * function tied to the get_the_excerpt filter hook.
 */
function shangyingorg_custom_excerpt_more( $output ) {
	if ( has_excerpt() && ! is_attachment() ) {
		$output .= shangyingorg_continue_reading_link();
	}
	return $output;
}
add_filter( 'get_the_excerpt', 'shangyingorg_custom_excerpt_more' );

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 */
function shangyingorg_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'shangyingorg_page_menu_args' );

/**
 * Register our sidebars and widgetized areas. Also register the default Epherma widget.
 *
 */
function shangyingorg_widgets_init() {

	register_sidebar( array(
		'name' => __( 'Main Sidebar', 'shangyingorg' ),
		'id' => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	register_sidebar( array(
		'name' => __( 'Showcase Sidebar', 'shangyingorg' ),
		'id' => 'sidebar-2',
		'description' => __( 'The sidebar for the optional Showcase Template', 'shangyingorg' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	register_sidebar( array(
		'name' => __( 'Footer Area One', 'shangyingorg' ),
		'id' => 'sidebar-3',
		'description' => __( 'An optional widget area for your site footer', 'shangyingorg' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	register_sidebar( array(
		'name' => __( 'Footer Area Two', 'shangyingorg' ),
		'id' => 'sidebar-4',
		'description' => __( 'An optional widget area for your site footer', 'shangyingorg' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	register_sidebar( array(
		'name' => __( 'Footer Area Three', 'shangyingorg' ),
		'id' => 'sidebar-5',
		'description' => __( 'An optional widget area for your site footer', 'shangyingorg' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => "</aside>",
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
        
        register_sidebar( array(
		'name' => __( 'Page Navigation Area', 'shangyingorg' ),
		'id' => 'sidebar-6',
		'description' => __( 'An optional widget area for your site links', 'shangyingorg' ),
		'before_widget' => '<section id="%1$s" class="navigate navaigate%1$s">',
		'after_widget' => "</section>",
		'before_title' => '<h2>',
		'after_title' => '</h2>',
	) );
    register_sidebar( array(
		'name' => __( 'Page Header Main Site Links', 'shangyingorg' ),
		'id' => 'sidebar-7',
		'description' => __( 'An header widget area for your site links', 'shangyingorg' ),
		'before_widget' => '',
		'after_widget' => "",
		'before_title' => '',
		'after_title' => '',
	) );
}
add_action( 'widgets_init', 'shangyingorg_widgets_init' );

if ( ! function_exists( 'shangyingorg_content_nav' ) ) :
/**
 * Display navigation to next/previous pages when applicable
 */
function shangyingorg_content_nav( $nav_id ) {
	global $wp_query;

	if ( $wp_query->max_num_pages > 1 ) : ?>
		<nav id="<?php echo $nav_id; ?>">
			<h3 class="assistive-text"><?php _e( 'Post navigation', 'shangyingorg' ); ?></h3>
			<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'shangyingorg' ) ); ?></div>
			<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'shangyingorg' ) ); ?></div>
		</nav><!-- #nav-above -->
	<?php endif;
}
endif; // shangyingorg_content_nav

/**
 * Return the URL for the first link found in the post content.
 *
 * @since Twenty Eleven 1.0
 * @return string|bool URL or false when no link is present.
 */
function shangyingorg_url_grabber() {
	if ( ! preg_match( '/<a\s[^>]*?href=[\'"](.+?)[\'"]/is', get_the_content(), $matches ) )
		return false;

	return esc_url_raw( $matches[1] );
}


if ( ! function_exists( 'shangyingorg_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 * Create your own shangyingorg_posted_on to override in a child theme
 *
 * @since Twenty Eleven 1.0
 */
function shangyingorg_posted_on() {
	printf( __( '<span class="sep">Posted on </span><a href="%1$s" title="%2$s" rel="bookmark"><time class="entry-date" datetime="%3$s" pubdate>%4$s</time></a><span class="by-author"> <span class="sep"> by </span> <span class="author vcard"><a class="url fn n" href="%5$s" title="%6$s" rel="author">%7$s</a></span></span>', 'shangyingorg' ),
		esc_url( get_permalink() ),
		esc_attr( get_the_time() ),
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
		esc_attr( sprintf( __( 'View all posts by %s', 'shangyingorg' ), get_the_author() ) ),
		get_the_author()
	);
}
endif;



function post_type_projects() {
register_post_type(
  'projects', 
  array( 'public' => true,
		 'publicly_queryable' => true,
		 'hierarchical' => true,
		 'menu_icon' => get_stylesheet_directory_uri() . '/img/video.png',
		 'labels'=>array(
					 'name' => _x('Projects', 'post type general name'),
					 'singular_name' => _x('Video', 'post type singular name'),
					 'add_new' => _x('Add New', 'project'),
					 'add_new_item' => __('Add New project'),
					 'edit_item' => __('Edit project'),
					 'new_item' => __('New project'),
					 'view_item' => __('View project'),
					 'search_items' => __('Search project'),
					 'not_found' =>  __('No projects found'),
					 'not_found_in_trash' => __('No projects found in Trash'), 
					 'parent_item_colon' => ''
					 ),							 
		  'show_ui' => true,
		  'menu_position'=>5,
		  'supports' => array(
					 'title',
					 'editor',
					 'author',
					 'post-thumbnails',
					 'thumbnail',
					 'excerpts',
					 'trackbacks',
					 'custom-fields',
					 'comments',
					 'revisions')
		) 
   );
} 

add_action('init', 'post_type_projects');

function create_genre_taxonomy() 
{
  $labels = array(
	  						  'name' => _x( 'Genre', 'taxonomy general name' ),
    						  'singular_name' => _x( 'genre', 'taxonomy singular name' ),
    						  'search_items' =>  __( 'Search genre' ),
   							  'all_items' => __( 'All Genre' ),
    						  'parent_item' => __( 'Parent Genre' ),
   					   		  'parent_item_colon' => __( 'Parent Genre:' ),
   							  'edit_item' => __( 'Edit Genre' ), 
  							  'update_item' => __( 'Update Genre' ),
  							  'add_new_item' => __( 'Add New Genre' ),
  							  'new_item_name' => __( 'New Genre Name' ),
  ); 	

  register_taxonomy('genre',array('projects'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'projects/genre' ),
  ));

  $labels2 = array(
	  						  'name' => _x( 'Tag', 'taxonomy general name' ),
    						  'singular_name' => _x( 'tag', 'taxonomy singular name' ),
    						  'search_items' =>  __( 'Search tag' ),
   							  'all_items' => __( 'All Tag' ),
   							  'edit_item' => __( 'Edit Tag' ), 
  							  'update_item' => __( 'Update Tag' ),
  							  'add_new_item' => __( 'Add New Tag' ),
  							  'new_item_name' => __( 'New Tag Name' ),
  ); 	

  register_taxonomy('ptag',array('projects'), array(
    'hierarchical' => false,
    'labels' => $labels2,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'projects/tag' ),
  ));
}
add_action( 'init', 'create_genre_taxonomy', 0 );





$new_meta_boxes =
array(
	"trailer" => array(
	"name" => "trailer",
	"std" => "",
	"title" => "Video",
	"description" => "
		<p>Enter the video url</p>
	
	"
),	"poster" => array(
	"name" => "poster",
	"std" => "",
	"title" => "Video snapshot | Poster image",
	"description" => "
		<p> Enter the url of Video snapshot or Poster image</p>
	
	"
),
	"theme" => array(
	"name" => "theme",
	"std" => "default",
	"title" => "Theme",
	"description" =>"<p>Enter the background theme value for this project post</p>"
	
)

);
function new_meta_boxes() {
global $post, $new_meta_boxes;

foreach($new_meta_boxes as $meta_box) {
$meta_box_value = get_post_meta($post->ID, $meta_box['name'].'_value', true);

if($meta_box_value == "")
$meta_box_value = $meta_box['std'];

if($meta_box['name'] != "theme"){
echo'<input type="hidden" name="'.$meta_box['name'].'_noncename" id="'.$meta_box['name'].'_noncename" value="'.wp_create_nonce( plugin_basename(__FILE__) ).'" />';

echo'<h2 style=" margin:0px; padding:0px 3px; font-style:normal; font-family:Tahoma; font-size:13px;font-weight:bold;">'.$meta_box['title'].'</h2>';

echo'<input type="text" name="'.$meta_box['name'].'_value" value="'.$meta_box_value.'" size="95" /><br />';

echo'<p><label for="'.$meta_box['name'].'_value">'.$meta_box['description'].'</label></p>';
}else{
echo'<input type="hidden" name="'.$meta_box['name'].'_noncename" id="'.$meta_box['name'].'_noncename" value="'.wp_create_nonce( plugin_basename(__FILE__) ).'" />';

echo'<h2 style=" margin:0px; padding:0px 3px; font-style:normal; font-family:Tahoma; font-size:13px;font-weight:bold;">'.$meta_box['title'].'</h2>';

echo'<select name="'.$meta_box['name'].'_value" value="'.$meta_box_value.'" style="width:200px"><option value="default">default</option><option value="medium">medium</option><option value="dark">dark</option></select><br />';

echo'<p><label for="'.$meta_box['name'].'_value">'.$meta_box['description'].'</label></p>';
}

}
}
function create_meta_box() {
global $theme_name;
if ( function_exists('add_meta_box') ) {
add_meta_box( 'new-meta-boxes', 'Multimedia data', 'new_meta_boxes', 'projects', 'normal', 'high' );
}
}
function save_postdata( $post_id ) {
global $post, $new_meta_boxes;

foreach($new_meta_boxes as $meta_box) {
// Verify
if ( !wp_verify_nonce( $_POST[$meta_box['name'].'_noncename'], plugin_basename(__FILE__) )) {
return $post_id;
}

if ( 'page' == $_POST['post_type'] ) {
if ( !current_user_can( 'edit_page', $post_id ))
return $post_id;
} else {
if ( !current_user_can( 'edit_post', $post_id ))
return $post_id;
}

$data = $_POST[$meta_box['name'].'_value'];

if(get_post_meta($post_id, $meta_box['name'].'_value') == "")
add_post_meta($post_id, $meta_box['name'].'_value', $data, true);
elseif($data != get_post_meta($post_id, $meta_box['name'].'_value', true))
update_post_meta($post_id, $meta_box['name'].'_value', $data);
elseif($data == "")
delete_post_meta($post_id, $meta_box['name'].'_value', get_post_meta($post_id, $meta_box['name'].'_value', true));
}
}
add_action('admin_menu', 'create_meta_box');
add_action('save_post', 'save_postdata');



