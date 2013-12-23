nextjump.github.io
========================

A blog!

If you want to contribute here are some simple steps to get started

(Apologies, this is specific to our work machines at the moment)

Install latest version of Ruby

    wget https://ftp.ruby-lang.org/pub/ruby/stable-snapshot.tar.gz
    tar -xzvf stable-snapshot.tar.gz
    cd ruby-2.0.0-r43100/
    ./configure
    make
    sudo make install

Install latest version of RubyGems

    wget http://production.cf.rubygems.org/rubygems/rubygems-2.1.5.tgz
    tar -xzvf rubygems-2.1.5.tgz
    cd rubygems-2.1.5
    sudo ruby setup.rb

Try running gem. If you get an error like this...

    /usr/bin/gem:10:in `<main>': undefined method `manage_gems' for Gem:Module (NoMethodError)

Then you need to do some other stuff. Will finish this soon.

Now for Jekyll...
`sudo gem install jekyll`
