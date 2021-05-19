## About

This is a simple text editor, auto-save, just use a URL. It uses Python 3, Nginx, HTML, JS and Redis.

[Try it!](http://note.rhavena.com){:target="_blank" rel="noopener"}

<h3>Docker Installation</h3>
<h4>
	<h5>Dependencies:</h5>
	<ul>
		<li><a href="https://www.docker.com" target="_blank">Docker</a></li>
		<li><a href="https://docs.docker.com/compose" target="_blank">Docker compose</a></li>
	</ul>
</h4>

```sh
$ git clone https://github.com/carlos-ft/note.git
$ cd note
$ docker-compose build
$ docker-compose up
```