        int
       main()
      {float f
    ;char c;int
  d,o;while(scanf(
 "%d%c%d ",&d,&c,&o)
>0){c&=31;for(f=!(c>>4)*55,c=(c*8/5+8)%12+o*
                     12-24;c--;f*=1.0595);
                        for(d=16e3/d;d--;
                           putchar(d*f
                            *.032))
                              ;}}