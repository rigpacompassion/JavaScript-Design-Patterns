// ==============================
// FACTORY OF GNU/LINUX DISTROS
// ==============================

const activeDistros = new Map();

const getLinuxDistro = (name) => {
    name = name.toLowerCase();

    let linuxDistro;

    if (!activeDistros.get(name)) {
        switch (name) {
            case "debian":
                linuxDistro = {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "Debian is booting...";
                    }
                };
                activeDistros.set(name, linuxDistro);
                return linuxDistro;
            case "redhat":
                linuxDistro = {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "RedHat is booting...";
                    }
                };
                activeDistros.set(name, linuxDistro);
                return linuxDistro;
            case "slackware":
                linuxDistro = {
                    name: name.charAt(0).toUpperCase(),
                    boot() {
                        return "Slackware is booting...";
                    }
                };
                activeDistros.set(name, linuxDistro);
                return linuxDistro;
            default:
                throw {
                    type: "Not found",
                    message: "The Linux distribution you are looking for has not been found."
                }
        }
    }
    // If the distro has already been instantiated, we return the initial instance
    return activeDistros.get(name);
};

// ==============================
// TEST 
// ==============================

// Creation of our objects through the factory
let debian = getLinuxDistro("DEBIAN"),
    debianAgain = getLinuxDistro("debian");

console.log(debian.boot()); // Debian is booting...
console.log(debianAgain.boot()); // Debian is booting...
console.log(debian === debianAgain); // true (the same object has been reused)