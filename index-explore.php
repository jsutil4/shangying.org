<section id="explore" class="explore">
        <h2>浏览</h2>
	    <?php 
            $args2=array('post_type' => array('projects', "post", "page"), 'meta_key' => '_thumbnail_id',
			 'post_status'=> 'publish','posts_per_page' => 6, 'orderby' => 'date',
			 'order' => 'DESC');
            query_posts($args2);
        ?>
	<?php if ( have_posts() ) : ?>
        <ul class="grid compact">
        <?php while ( have_posts() ) : the_post(); ?>
            <li>
                <a href="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail('thumbnail'); ?>
                    <span class="caption">
                        <span class="caption1"><?php the_author(); ?></span><br/>
                        <span class="caption2"><?php the_title(); ?></span><br/>
                        <span class="caption3"><time class="time"><?php the_time('F - j - Y'); ?></time><?php the_excerpt(); ?></span>
                    </span>
                </a>
            </li>
        <?php endwhile; ?>
        </ul>
	<?php endif; ?>
	<?php wp_reset_query();?>
</section>