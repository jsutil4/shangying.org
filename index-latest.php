<section class="latest">
    <section id="blog">
        <header class="header"><h2>最新博客日志</h2>
        <nav class="feed_nav">
            <a class="nav start" title="更多" href="/blog">全部博客日志</a>
        </nav>
        </header>
        <?php 
            $args3=array('post_type' => array("post"), 'category_name' => 'Blog',
			 'post_status'=> 'publish','posts_per_page' => 2, 'orderby' => 'date',
			 'order' => 'DESC');
            query_posts($args3);
        ?>
        <?php if ( have_posts() ) : ?>
        <ol>
            <?php while ( have_posts() ) : the_post(); ?>
            <li>
                <div class="image">
                    <a title="<?php the_title(); ?>" href="<?php the_permalink(); ?>">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('thumbnail'); ?>
                        <?php else : ?>
							<?php
								$_arg3 = array('post_type' => 'attachment', 'numberposts' => 1, 'post_parent' => $post->ID);
								$attachments = get_posts($_arg3);
								if( $attachments ){
									foreach($attachments as $att) {
										echo wp_get_attachment_image($att->ID, 'thumbnail');
									}
								}else{
									echo '<img title="';
									the_title();
									echo '" alt="" width="160" height="160" src="/img/blog_articles/7001-7200/7117_160c.jpg?1335798384">';
								}
							?>
                        <?php endif ?>
                        
                        <span class="caption"><span class="caption1"><?php the_author(); ?></span><br>
                        <span class="caption2"><?php the_title(); ?></span><br>
                        <span class="caption3"><?php the_excerpt(); ?></span></span>
                    </a>
                </div>
            </li>
            <?php endwhile; ?>
        </ol>
        <?php endif; ?>
	<?php wp_reset_query();?>
    </section>
</section>