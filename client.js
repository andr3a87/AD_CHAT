$( document ).ready(function() {
  var socket = io(); // initialise socket.io connection
/*
  function getName() {
    // prompt for person's name before allowing to post
    var name = Cookies.get('name');
    if(!name || name === 'null') {
      name = window.prompt("What is your name/handle?");
      Cookies.set('name', name);
    }
    socket.emit('io:name', name);
    $( "#m" ).focus(); // focus cursor on the message input
    return name;
  } */

  function leadZero(number) {
    return (number < 10) ? '0'+number : number;
  }

  function getTime(timestamp) {
    var t, h, m, s, time;
    t = new Date(timestamp);
    h = leadZero(t.getHours());
    m = leadZero(t.getMinutes());
    s = leadZero(t.getSeconds());
    return '' + h  + ':' + m + ':' + s;
  }

  /**
   * renders messages to the DOM
   * nothing fancy
   */
  function renderMessage(msg) {
    msg = JSON.parse(msg);
    var html = "<li class='media'>";
	html+="<div class='media-body'>";
	html+="<div class='media'>";
	html+="<a class='pull-lef' href='#'>";
	html+="<img class='media-object img-circle ' src=\""+msg.i+"\" /></a>";
	html+="<div class='media-body' >"+ msg.m +"<br />";                                              
	html+="<small class='text-muted'>"+msg.n+" | "+ getTime(msg.t)  +"</small>";
	html+="<hr /></div></div></div></li>";
	//html+="<img src=\""+msg.i+"\">";
    //html += "<small class='time'>" + getTime(msg.t)  + " </small>";
    //html += "<span class='name'>" + msg.n + ": </span>";
    //html += "<span class='msg'>"  + msg.m + "</span>";
    //html += "</li>";
    $('#messages').append(html);  // append to list
    return;
  }

  $('form').submit(function() {
    console.log("mess client: "+$('#m').val());
    //if input is empty or white space do not send message
    if($('#m').val().match(/^[\s]*$/) !== null) { 
      $('#m').val('');
      $('#m').attr('placeholder', 'please enter your message here');
      return false; 
    }
    

      var msg  = $('#m').val();
	  console.log("mess client sto per emit : "+msg);
      socket.emit('io:message', msg);
      $('#m').val(''); // clear message form ready for next/new message
      $('#m').attr('placeholder', ''); //clears placeholder once a msg is successfully sent
      return false;
    
  });

  // keeps latest message at the bottom of the screen
  // http://stackoverflow.com/a/11910887/2870306
  function scrollToBottom () {
    $(window).scrollTop($('#messages').height());
  }

  window.onresize = function(){
    scrollToBottom();
  }

  socket.on('chat:messages:latest', function(msg) {
    console.log(">> " +msg);
    renderMessage(msg);
    scrollToBottom();
  });

/*  socket.on('chat:people:new', function(user) {
    $('#joiners').show();
    $('#joined').text(user.name)
    $('#joiners').fadeOut(5000);
  });
*/
 // getName();

  function loadMessages() {
    $.get('/load', function(data){
      console.log(data);
      data.map(function(msg){
        renderMessage(msg);
      })
        scrollToBottom();
    })
  }
  loadMessages();
});
