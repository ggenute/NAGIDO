<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerB5zQntF\srcProdProjectContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerB5zQntF/srcProdProjectContainer.php') {
    touch(__DIR__.'/ContainerB5zQntF.legacy');

    return;
}

if (!\class_exists(srcProdProjectContainer::class, false)) {
    \class_alias(\ContainerB5zQntF\srcProdProjectContainer::class, srcProdProjectContainer::class, false);
}

return new \ContainerB5zQntF\srcProdProjectContainer(array(
    'container.build_hash' => 'B5zQntF',
    'container.build_id' => '8f400918',
    'container.build_time' => 1526277254,
), __DIR__.\DIRECTORY_SEPARATOR.'ContainerB5zQntF');
