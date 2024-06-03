<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit3ff923b9a1333001325b4f7646205a8d
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit3ff923b9a1333001325b4f7646205a8d', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit3ff923b9a1333001325b4f7646205a8d', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit3ff923b9a1333001325b4f7646205a8d::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
