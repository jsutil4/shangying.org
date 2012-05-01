<?php
/*
 * This is for project genre page
 */
get_header();
$term = $wp_query->queried_object;
//$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'genre' ) );
?>
<script>
    console.log(<?php echo $term->term_id ?>);
    console.log('<?php echo $term->name ?>');
    console.log('<?php echo $term->slug ?>');
    console.log('<?php echo $term->description ?>');
</script>
<section id="content">
	<header class="page_header">
		<h1 id="content_page_header"><?php echo $term->description ?></h1>
        <div class="list_layout">
            <h2>视图</h2>
            <ul>
                <li><a href="javascript:void(0);" class="large_items" title="大图视图" id="large_items"></a></li>
                <li><a href="javascript:void(0);" class="small_items" title="小图视图" id="small_items"></a></li>
            </ul>
        </div>
	</header>
	<section class="content_nav list_nav">
        <div class="sort">
            <h2 style="cursor: pointer;">排序</h2>
            <ul class="dropdown">
                <li><a id="sort_from_new" href="javascript:void(0);">最新在前</a></li>
                <li><a id="sort_to_new" href="javascript:void(0);">最新在后</a></li>
                <li><a id="sort_asc" href="javascript:void(0);">升序</a></li>
                <li><a id="sort_desc" href="javascript:void(0);">降序</a></li>
            </ul>
        </div>
 
	 
        <section class="sort project_categories" style="display: block; ">
            <h2 style="cursor: pointer; ">类别</h2>
            <ul class="dropdown long">
                        <!--<li><a href="/projects">All</a></li>-->
                        <!--<li><a href="/projects/category/experimental">艺术实验</a></li>-->
                        <!--<li><a href="/projects/category/fashion_film" class="active">时尚短片</a></li>-->
                        <!--<li><a href="/projects/category/interactive">时尚互动</a></li>-->
                        <!--<li><a href="/projects/category/interviews">时尚专访</a></li>-->
                        <!--<li><a href="/projects/category/monograph">时尚专题</a></li>-->
                        <!--<li><a href="/projects/category/performance">表演艺术</a></li>-->
                        <!--<li><a href="/projects/category/photography">影像</a></li>-->
            </ul>
        </section>
        <section class="tags" style="display: block; ">
            <h2 class="show_more">标签</h2>
            <ul class="filters">
            </ul>
        </section>
    </section>
    <section class="main">
        <?php 
            $_args=array('post_type' => array('projects'), 
			 'post_status'=> 'publish', 'orderby' => 'date',
			 'order' => 'DESC');
            query_posts($_args);
        ?>
        <?php if ( have_posts() ) : ?>
        <ul class="grid project_list">
            <?php while ( have_posts() ) : the_post(); ?>
            <li>
                <a href="<?php the_permalink(); ?>">
                <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail('medium'); ?>
                <?php else : ?>
                    <?php
                        $_arg3 = array('post_type' => 'attachment', 'numberposts' => 1, 'post_parent' => $post->ID);
                        $attachments = get_posts($_arg3);
                        if( $attachments ){
                            foreach($attachments as $att) {
                                echo wp_get_attachment_image($att->ID, 'meidum');
                            }
                        }else{
                            echo '<img title="';
                            the_title();
                            echo '" alt="" src="/img/blog_articles/7001-7200/7117_160c.jpg?1335798384">';
                        }
                    ?>
                <?php endif ?>
                <span class="caption">
                    <span class="caption1"><?php the_author(); ?></span><br>
                    <span class="caption2"><?php the_title(); ?></span><br>
                    <span class="caption3"><time class="time"><?php the_time('F - j - Y'); ?></time><?php the_excerpt(); ?></span></span>
                </span>
                </a>
            </li>
            <?php endwhile; ?>
        </ul>
        <?php endif; ?>
    </section>
</section>
<?php get_footer(); ?>