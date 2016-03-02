var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var d = new Date();
            var s = Math.floor(d/1000);
            return String(s);
        },
		UnixMillisecond: function(){
            var d = new Date();
            var m = d.getTime();
            return m
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                  var d = new Date();
                  var hr = d.getHours();
                  if (hr > 12) {
                      var a = "PM";
                      hr = hr - 12;
                   }else if ( hr < 12 ) {
                       var a = "AM";                    
                   }else if (hr == 0) {
                       hr = 12;
                       var a = "AM";
                   }
                   var min = d.getMinutes();
                   if (min < 10) {
                       min = ("0" + String(min));
                   }
                   var sec = d.getSeconds();
                   if (sec < 10) {
                       sec = ("0" + String(sec));
                   }
                   var time = (hr + ":" + min + ":" + sec + " " + a);
                  return String(time);
              },
	   	    WithOutSeconds: function() {
                var d = new Date();
                  var hr = d.getHours();
                  
                  if (hr > 12) {
                      var a = "PM";
                      hr = hr - 12;
                   }else if ( hr < 12 ) {
                       var a = "AM";                    
                   }else if (hr == 0) {
                       hr = 12;
                       var a = "AM";
                   }
                   var min = d.getMinutes();
                   if (min < 10) {
                       min = ("0" + String(min));
                   }
                   var time = (hr + ":" + min + " " + a);
                  return String(time);   
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var d = new Date();
                var m = d.getMonth() + 1;
                var day = d.getDate();
                var y = d.getFullYear();
                var nd = (m + "/" + day + "/" + y);
                return String(nd);
            },
			Name: function(){
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var d = new Date();
                var thisMonth = months[d.getMonth()];
                var day = d.getDate();
                var yr = d.getFullYear();
                var nam = (thisMonth + " " + day + "," + " " + yr);
                return String(nam);
            }
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                var d = new Date();
                var sec = d.getSeconds();
                return String(sec);
                
            },
			DblDigit: function(){
                var d = new Date();
                var sec = d.getSeconds();
                if (sec < 10) {
                    sec = ("0" + String(sec));
                }else {
                    sec = String(sec);    
                }
                return sec;
            }
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                var d = new Date();
                var min = d.getMinutes();
                
                return String(min);
            },
			DblDigit: function(){
                var d = new Date();
                var min = d.getMinutes();
                if (min < 10) {
                    min = ("0" + String(min));
                }else {
                    min = String(min);    
                }
                return min;
             }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
                var d = new Date();
                var hr = d.getHours();
                return String(hr);
            },
			TwelveHour: function() {
                var d = new Date();
                var hr = d.getHours();
                
                if (hr >12) {
                   hr = (hr - 12);
               } else if (hr == 0) {
                   hr = 1;
               } 
               
                return String(hr);
            },
			AMPM: (function() {
				return {
					UpperCase: function(){
                        var d = new Date();
                        var hr = d.getHours();
                        if (hr > 12) {
                            var a = "PM";
                        }else { 
                            var a = "AM";    
                        }
                        return a;
                    },
					LowerCase: function(){
                        var d = new Date();
                        var hr = d.getHours();
                        if (hr > 12) {
                            var a = "pm";
                        }else { 
                            var a = "am";    
                        }
                        return a;
                    }
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var d = new Date();
                var day = days[d.getDay()];
                return String(day);
            },
			AbrDayOfWeek: function(){
                var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                var d = new Date();
                var day = days[d.getDay()];
                return String(day);
            },
			FirstTwoOfWeek: function(){
                var days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
                var d = new Date();
                var day = days[d.getDay()];
                return String(day);
            },
			WeekOfYear: function(){
                var oldDate = new Date(2016, 0, 1, 0, 0, 0, 0);
                        var d = new Date();
                        var diff = d - oldDate;
                        diff = Math.ceil((diff/86400000)); //get days since 1st of year//
                        diff = Math.ceil(diff/7); //get weeks//
                        return String(diff);
            }
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                       var d = new Date();
                       var day = d.getDate()
                       
                       return String(day); 
                    },
					Ordinal: function(){
                       var d = new Date();
                       var day = d.getDate();
                       
                       if (day === 1 || day === 21 || day === 31) {
                           day = (String(day) + "st");
                       } 
                       else if (day === 2 || day === 22) {
                           day = (String(day) + "nd");
                       } 
                       else if (day === 3 || day === 23) {
                           day = (String(day) + "rd");
                       } 
                       else {
                           day = (String(day) + "th");
                       }
                       
                       return day; 
                    },
					DateDblDigit: function(){
                        var d = new Date();
                        var day = d.getDate();
                        if (day <10) {
                            day = "0" + day;
                        }
                        return String(day);
                    }
				}
			})(),
			MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return String(month);
            },
			MonthNumberDblDigit: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                if (month < 10) {
                    month = ("0" + String(month));
                }
                return String(month);
            },
			AbrOfCurrentMonth: function(){
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                var d = new Date();
                var thisMonth = months[d.getMonth()];
                return String(thisMonth);
            },
			CurrentMonth: function(){
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var d = new Date();
                var thisMonth = months[d.getMonth()];
                return String(thisMonth);
            }
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        var oldDate = new Date(2016, 0, 1, 0, 0, 0, 0);
                        var d = new Date();
                        var diff = d - oldDate;
                        diff = Math.ceil((diff/86400000));
                        return String(diff);
                        
                    },
					Ordinal: function(){
                        var oldDate = new Date(2016, 0, 1, 0, 0, 0, 0);
                        var d = new Date();
                        var diff = d - oldDate;
                        diff = Math.ceil((diff/86400000));
                        if (diff == 1) {
                            ordDate = diff + "st";
                        }
                        return String(diff);
                    }
				}
			})(),
			YearFull: function(){
                var d = new Date();
                var yr = d.getFullYear();
                return String(yr);
            },
			YearAbr: function(){
                var d = new Date();
                var yr = String(d.getFullYear());
                
                var abr = yr.slice(2);
                return String(abr);
            }
		}
	})(),
	Defaults: function(){
        var d = new Date();
        var yr = d.getFullYear();
        
        var month = d.getMonth();
        if (month < 10) {
            month = ("0" + String(month));
        }
        
        var day = d.getDate() + 1;
        if (day <10) {
            day = "0" + String(day);
        }
        
        var hr = d.getHours();
        if (hr < 10) {
            hr = "0" + String(hr);
        }
       
        var min = d.getMinutes();
            if (min < 10) {
                min = ("0" + String(min));
            }
           
        var sec = d.getSeconds();
            if (sec < 10) {
                sec = ("0" + String(sec));
            }
            
        var display = (yr + "-" + day + "-" + month + "T" + hr + ":" + min + ":" + sec)    
        return String(display);
    }
  }
})();