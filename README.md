Mikado.home
=====

Mikado.home is intended to be a low level framework for browser scripting
Other more high level frameworks can be build on top of mikado.home.

Currently this repo contains stubs (plan to build).

Planned structure and files:

* home
  * browser
  * meta
  * viewport
  * css
*** loader.js
*** writer.js
** dom
*** dimension.js
*** element.js
*** event.js
*** form.js
*** position.js
*** style.js
*** traversal.js
** io
*** xhr.js
*** xdr.js
** lang __(fixes for legacy browsers)__
*** array.js
*** object.js
*** string.js
*** number.js
** script
*** loader.js
*** writer.js
** transition
*** tween.js
*** easing.js
** util
*** cache.js
*** class.js

Note
====
These core files need to be very low level, no fluf or added convenience methods.
Convenience methods should reside in a higher level framework.

A high level framework making use of the low level mikado.home framework could be:
* cloning other framework syntax like jquery, prototype or dojo.
* widgets/ui framework
* abstractions
* client side spring like framework (IOC/AOP)

I'm really trying to make a distinction between low level API's every single existing framework needs.
And the syntactical sugar and extras that makes each existing framework unique.
Hence mikado being a platform for frameworks and NOT a framework in itself.