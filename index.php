<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 */

get_header(); ?>
    <section id="content">
        <?php 
            $postct = 3; 
            $args=array('post_type' => 'projects', 'post_format' => array('image', 'video'),
			'post_status'=> 'publish','posts_per_page' =>$postct, 'orderby' => 'date',
			'order' => 'DESC', 'meta_key'=>'add_to_banner', 'meta_value'=> 'true');
            query_posts($args);
        ?>
        <ul id="background">
            <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>
                    <?php get_template_part( 'banner', get_post_format() ); ?>
				<?php endwhile; ?>
			<?php endif; ?>
        </ul>
        <section id="highlights" class="page_header highlights">
            <ul id="highlights_items">
                <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>
                <li id="<?php the_ID(); ?>" class="dark">
                    <h1>
                        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" >
                            <span class="type"><?php the_category(', '); ?></span><br/>
                            <span class="time"><time><?php the_time('F - j - Y'); ?></time></span><br />
                            <span class="title"><?php the_title(); ?></span><br />
                            <span class="subtitle"></span>
                        </a>
                    </h1>
                </li>
                <?php endwhile; ?>
                <?php endif; ?>
	    </ul>
        <?php wp_reset_query();?>
	</section> 
    <?php get_template_part( 'index', 'explore'); ?>
    <?php get_template_part( 'index', 'latest' ); ?>
    <?php get_template_part( 'index', 'community' ); ?>
    </section><!-- #content -->
<?php get_footer(); ?>
