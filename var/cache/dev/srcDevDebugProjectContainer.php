<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerX0oYHBb\srcDevDebugProjectContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerX0oYHBb/srcDevDebugProjectContainer.php') {
    touch(__DIR__.'/ContainerX0oYHBb.legacy');

    return;
}

if (!\class_exists(srcDevDebugProjectContainer::class, false)) {
    \class_alias(\ContainerX0oYHBb\srcDevDebugProjectContainer::class, srcDevDebugProjectContainer::class, false);
}

return new \ContainerX0oYHBb\srcDevDebugProjectContainer(array(
    'container.build_hash' => 'X0oYHBb',
    'container.build_id' => 'a0ce89fc',
    'container.build_time' => 1526277296,
), __DIR__.\DIRECTORY_SEPARATOR.'ContainerX0oYHBb');
