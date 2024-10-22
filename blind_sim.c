#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
    int i = 0;
    while (i < 10) {
        system("xrandr --output HDMI-1 --brightness 0.5");
        sleep(0.2);

        system("xrandr --output HDMI-1 --brightness 1");
        sleep(0.2);

        system("xrandr --output HDMI-1 --brightness 2");
        sleep(0.2);

        system("xrandr --output HDMI-1 --brightness 1");
        sleep(0.2);

        system("xrandr --output HDMI-1 --brightness 0.5");
        sleep(0.2);

        system("xrandr --output HDMI-1 --brightness 1");
        sleep(0.2);

        i++;
    }
    
    return 0;
}
