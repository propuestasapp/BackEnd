'use strict';

var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');

var Company = require('../models/company');
var Module = require('../models/module');
var Proyect = require('../models/proyect');
var User = require('../models/user');
var Country = require('../models/country');
var SimpleTask = require('../models/simpleTask');

/******************************************** COUNTRY ****************************************************/
function saveCountry(req, res) {
    var country = new Country();

    Country.find({}, (err, countries) => {
        if (countries.length < 1) {
            country.name = ["Andorra,Emiratos Árabes Unidos,Afganistán,Antigua y Barbuda,Anguila,Albania,Armenia,Antillas Neerlandesas,Angola,Antártida,Argentina,Samoa Americana,Austria,Australia,Aruba,Islas Áland,Azerbaiyán,Bosnia y Herzegovina,Barbados,Bangladesh,Bélgica,Burkina Faso,Bulgaria,Bahréin,Burundi,Benin,San Bartolomé,Bermudas,Brunéi,Bolivia,Brasil,Bahamas,Bhután,Isla Bouvet,Botsuana,Belarús,Belice,Canadá,Islas Cocos,República Centro-Africana,Congo,Suiza,Costa de Marfil,Islas Cook,Chile,Camerún,China,Colombia,Costa Rica,Cuba,Cabo Verde,Islas Christmas,Chipre,República Checa,Alemania,Yibuti,Dinamarca,Domínica,República Dominicana,Argel,Ecuador,Estonia,Egipto,Sahara Occidental,Eritrea,España,Etiopía,Finlandia,Fiji,Islas Malvinas,Micronesia,Islas Faroe,Francia,Gabón,Reino Unido,Granada,Georgia,Guayana Francesa,Guernsey,Ghana,Gibraltar,Groenlandia,Gambia,Guinea,Guadalupe,Guinea Ecuatorial,Grecia,Georgia del Sur e Islas Sandwich del Sur,Guatemala,Guam,Guinea-Bissau,Guayana,Hong Kong,Islas Heard y McDonald,Honduras,Croacia,Haití,Hungría,Indonesia,Irlanda,Israel,Isla de Man,India,Territorio Británico del Océano Índico,Irak,Irán,Islandia,Italia,Jersey,Jamaica,Jordania,Japón,Kenia,Kirguistán,Camboya,Kiribati,Comoros,San Cristóbal y Nieves,Corea del Norte,Corea del Sur,Kuwait,Islas Caimán,Kazajstán,Laos,Líbano,Santa Lucía,Liechtenstein,Sri Lanka,Liberia,Lesotho,Lituania,Luxemburgo,Letonia,Libia,Marruecos,Mónaco,Moldova,Montenegro,Madagascar,Islas Marshall,Macedonia,Mali,Myanmar,Mongolia,Macao,Martinica,Mauritania,Montserrat,Malta,Mauricio,Maldivas,Malawi,México,Malasia,Mozambique,Namibia,Nueva Caledonia,Níger,Islas Norkfolk,Nigeria,Nicaragua,Países Bajos,Noruega,Nepal,Nauru,Niue,Nueva Zelanda,Omán,Panamá,Perú,Polinesia Francesa,Papúa Nueva Guinea,Filipinas,Pakistán,Polonia,San Pedro y Miquelón,Islas Pitcairn,Puerto Rico,Palestina,Portugal,Islas Palaos,Paraguay,Qatar,Reunión,Rumanía,Serbia y Montenegro,Rusia,Ruanda,Arabia Saudita,Islas Solomón,Seychelles,Sudán,Suecia,Singapur,Santa Elena,Eslovenia,Islas Svalbard y Jan Mayen,Eslovaquia,Sierra Leona,San Marino,Senegal,Somalia,Surinam,Santo Tomé y Príncipe,El Salvador,Siria,Suazilandia,Islas Turcas y Caicos,Chad,Territorios Australes Franceses,Togo,Tailandia,Tanzania,Tayikistán,Tokelau,Timor-Leste,Turkmenistán,Túnez,Tonga,Turquía,Trinidad y Tobago,Tuvalu,Taiwán,Ucrania,Uganda,Estados Unidos de América,Uruguay,Uzbekistán,Ciudad del Vaticano,San Vicente y las Granadinas,Venezuela,Islas Vírgenes Británicas,Islas Vírgenes de los Estados Unidos de América,Vietnam,Vanuatu,Wallis y Futuna,Samoa,Yemen,Mayotte,Sudáfrica"];
            country.twoLetterCode = ["AD,AE,AF,AG,AI,AL,AM,AN,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH,ER,ES,ET,FI,FJ,FK,FM,FO,FR,GA,GB,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,HU,ID,IE,IL,IM,IN,IO,IQ,IR,IS,IT,JE,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MG,MH,MK,ML,MM,MN,MO,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,PR,PS,PT,PW,PY,QA,RE,RO,RS,RU,RW,SA,SB,SC,SD,SE,SG,SH,SI,SJ,SK,SL,SM,SN,SO,SR,ST,SV,SY,SZ,TC,TD,TF,TG,TH,TH,TJ,TK,TL,TM,TN,TO,TR,TT,TV,TW,UA,UG,US,UY,UZ,VA,VC,VE,VG,VI,VN,VU,WF,WS,YE,YT,ZA"];
            country.threeLetterCode = ["AND,ARE,AFG,ATG,AIA,ALB,ARM,ANT,AGO,ATA,ARG,ASM,AUT,AUS,ABW,ALA,AZE,BIH,BRB,BGD,BEL,BFA,BGR,BHR,BDI,BEN,BLM,BMU,BRN,BOL,BRA,BHS,BTN,BVT,BWA,BLR,BLZ,CAN,CCK,CAF,COG,CHE,CIV,COK,CHL,CMR,CHN,COL,CRI,CUB,CPV,CXR,CYP,CZE,DEU,DJI,DNK,DMA,DOM,DZA,ECU,EST,EGY,ESH,ERI,ESP,ETH,FIN,FJI,KLK,FSM,FRO,FRA,GAB,GBR,GRD,GEO,GUF,GGY,GHA,GIB,GRL,GMB,GIN,GLP,GNQ,GRC,SGS,GTM,GUM,GNB,GUY,HKG,HMD,HND,HRV,HTI,HUN,IDN,IRL,ISR,IMN,IND,IOT,IRQ,IRN,ISL,ITA,JEY,JAM,JOR,JPN,KEN,KGZ,KHM,KIR,COM,KNA,PRK,KOR,KWT,CYM,KAZ,LAO,LBN,LCA,LIE,LKA,LBR,LSO,LTU,LUX,LVA,LBY,MAR,MCO,MDA,MNE,MDG,MHL,MKD,MLI,MMR,MNG,MAC,MTQ,MRT,MSR,MLT,MUS,MDV,MWI,MEX,MYS,MOZ,NAM,NCL,NER,NFK,NGA,NIC,NLD,NOR,NPL,NRU,NIU,NZL,OMN,PAN,PER,PYF,PNG,PHL,PAK,POL,SPM,PCN,PRI,PSE,PRT,PLW,PRY,QAT,REU,ROU,SRB,RUS,RWA,SAU,SLB,SYC,SDN,SWE,SGP,SHN,SVN,SJM,SVK,SLE,SMR,SEN,SOM,SUR,STP,SLV,SYR,SWZ,TCA,TCD,ATF,TGO,THA,TZA,TJK,TKL,TLS,TKM,TUN,TON,TUR,TTO,TUV,TWN,UKR,UGA,USA,URY,UZB,VAT,VCT,VEN,VGB,VIR,VNM,VUT,WLF,WSM,YEM,MYT,ZAF"];
            country.numericCode = ["020,784,004,028,660,008,051,530,024,010,032,016,040,036,533,248,031,070,052,050,056,854,100,048,108,204,652,060,096,068,076,044,064,074,072,112,084,124,166,140,178,756,384,184,152,120,156,170,188,192,132,162,196,203,276,262,208,212,214,012,218,233,818,732,232,724,231,246,242,238,583,234,250,266,826,308,268,254,831,288,292,304,270,324,312,226,300,239,320,316,624,328,344,334,340,191,332,348,360,372,376,833,356,086,368,364,352,380,832,388,400,392,404,417,116,296,174,659,408,410,414,136,398,418,422,662,438,144,430,426,440,442,428,434,504,492,498,499,450,584,807,466,104,496,446,474,478,500,470,480,462,454,484,458,508,516,540,562,574,566,558,528,578,524,520,570,554,512,591,604,258,598,608,586,616,666,612,630,275,620,585,600,634,638,642,688,643,646,682,090,690,736,752,702,654,705,744,703,694,674,686,706,740,678,222,760,748,796,148,260,768,764,834,762,772,626,795,788,776,792,780,798,158,804,800,840,858,860,336,670,862,092,850,704,548,876,882,887,175,710"];

            country.save((err2, countrySave) => {
            });

            country = new Country();
            country.number = 1;
            country.save((err3, auto) => {
            });
        }
    });
}

function listCountry(req, res) {
    Country.find((err, countries) => {
        if (!countries) {
            res.status(200).send({ message: "No hay registros" });
        } else {
            res.status(200).send(countries);
        }
    });
}

function updateCountry(req, res) {
    var rol = req.params.rol;
    var newYear = req.params.newYear;
    var auto;

    if('COLLABORATOR' == rol || 'ADVISER' == rol){
        res.status(500).send({message: 'No tienes permiso'});
    }else{
        Country.find((err, countries) => {
            if(newYear == 1){
                auto = 0;
            }else{
                auto = countries[1].number
            }
            Country.findByIdAndUpdate(countries[1]._id, {number: auto+1}, {new: true}, (err, update) => {
                if(err){
                    res.status(200).send({message: 'Error al actualizar'});
                }else{
                    res.status(200).send({message: 'Se incremento correctamente'});
                }
            });
        });
    }
}

/******************************************** USER ****************************************************/
function saveUser(req, res) {
    var params = req.body;
    var user = new User();

    if (params.name && params.lastName && params.userName && params.email && params.password && params.rol) {
        user.name = params.name;
        user.lastName = params.lastName;
        user.userName = params.userName;
        user.email = params.email.toLowerCase();
        user.password = params.password;
        user.rol = params.rol.toUpperCase();

        User.findOne({ email: user.email }, (err, issetUser) => {
            if (issetUser) {
                res.status(200).send({ message: 'El usuario ya esta registrado' });
            } else {
                if (!issetUser) {
                    bcrypt.hash(params.password, null, null, function (err, hash) {
                        user.password = hash;

                        user.save((err, userSave) => {
                            if (err) {
                                res.status(500).send({ message: 'Error al guardar' });
                            } else {
                                if (!userSave) {
                                    res.status(404).send({ message: 'No se pudo guardar' });
                                } else {
                                    res.status(200).send({ user: userSave });
                                }
                            }
                        });
                    });
                }
            }
        });
    } else {
        res.status(200).send({ message: 'Ingrese todos los campos' });
    }
}

function listUser(req, res) {

    User.find((err, users) => {
        if (err) {
            res.status(404).send({ message: 'No se pudo listar' });
        } else {
            res.status(200).send({ users: users });
        }
    });
}

function searchUser(req, res) {
    var userId = req.params.id;

    User.findOne({ _id: userId }, (err, user) => {
        if (err) {
            res.status(404).send({ message: 'No se pudo listar' });
        } else {
            if (!user) {
                res.stats(404).send({ message: 'No se pudo listar' });
            } else {
                res.status(200).send({ user });
            }
        }
    });
}

function updateUser(req, res) {
    var params = req.body;
    var userId = req.params.id;
    User.findByIdAndUpdate(userId, params, { new: true }, (err, update) => {
        if (err) {
            res.status(200).send({ message: 'Error al actualizar' });
        } else {
            if (!update) {
                res.stats(404).send({ message: 'No se pudo actualizar' });
            } else {
                res.status(200).send({ user: update });
            }
        }
    });
}

function deleteUser(req, res) {
    var userId = req.params.id;

    User.findByIdAndDelete(userId, (err, userSave) => {
        if (err) {
            res.status(200).send({ message: 'Error al eliminar' });
        } else {
            if (!userSave) {
                res.status(404).send({ message: 'Error al eliminar' });
            } else {
                res.status(200).send({ message: 'Se ha elimado de la base de datos' });
            }
        }
    });
}

function login(req, res) {
    var params = req.body;
    User.findOne({ email: params.email }, (err, user) => {
        if (err) {
            res.status(200).send({ message: 'Error al ingresar' });
        } else if (!user) {
            res.status(200).send({ message: 'No se encontro el usuario' });
        } else {
            bcrypt.compare(params.password, user.password, (err, check) => {
                if (check) {
                    // console.log(jwt.createToken(user))
                    res.status(200).send({ token: jwt.createToken(user), user: user});
                } else {
                    res.status(200).send({ message: 'Error en tu contrasena' });
                }
            })
        }
    })
}
/**************************************** COMPANY ************************************************** */
function saveCompany(req, res) {
    var params = req.body;
    var company = new Company();
    var rol = req.params.rol;

    if('ADVISER' == rol){
        res.status(500).send({message: 'No tienes permiso'});
    }else{
        if('ADMIN' == rol){
            company.status = 'ACCEPTED';
        }else{
            company.status = 'REVIEW'
        }
        if (params.name && params.description && params.country) {
            company.name = params.name.toUpperCase();
            company.description = params.description;
            company.country = params.country;

            Company.findOne({ name: company.name, country: company.country }, (errr, found) => {
                if (found) {
                    res.status(200).send({ message: "Ya esta registrada"});
                } else {
                    company.save((err, companySave) => {
                        if (err) {
                            res.status(500).send({ message: 'Error al guardar' });
                        } else {
                            if (!companySave) {
                                res.status(404).send({ message: 'No se pudo guardar' });
                            } else {
                                res.status(200).send({ company: companySave });
                            }
                        }
                    });
                }
            });
        } else {
            res.status(200).send({ message: 'Ingrese todos los campos' });
        }
    }
}

function listCompany(req, res) {
    var saus = req.params.rol;

    Company.find({status: saus}, (err, companies) => {
        if (err) {
            res.status(404).send({ message: 'No se pudo listar' });
        } else {
            res.status(200).send({companies: companies, rol: req.user});
        }
    });
}

function searchCompany(req, res) {
    var companyId = req.params.id;

    Company.findOne({ _id: companyId}, (err, company) => {
        if (err) {
            res.status(404).send({ message: 'No se pudo listar' });
        } else {
            res.status(200).send(company);
        }
    });
}

function updateCompany(req, res) {
    var params = req.body;
    var companyId = req.params.id;

    Company.findByIdAndUpdate(companyId, params, { new: true }, (err, companyUpdate) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar' });
        } else {
            if (!companyUpdate) {
                res.status(404).send({ message: 'No se pudo actualizar' });
            } else {
                res.status(200).send({ companyUpdate });
            }
        }
    });
}

function deleteCompany(req, res) {
    var companyId = req.params.id;

    Company.findByIdAndDelete(companyId, (err, companyDelete) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar' });
        } else {
            if (!companyDelete) {
                res.status(404).send({ message: 'Error al eliminar' })
            } else {
                res.status(200).send({ message: 'Se elimino correctamente' });
            }

        }
    });
}
/*********************************************** MODULE ************************************************/
function saveModule(req, res) {
    var params = req.body;
    var modules = new Module();
    var rol = req.params.rol;

    if ('ADVISER' == rol) {
        res.status(500).send({ message: 'No tienes permiso' });
        console.log(res)
    } else {
        if ('ADMIN' == rol) {
            modules.status = 'ACCEPTED';
        } else {
            modules.status = 'REVIEW'
        }
        if (params.name && params.description && params.months && params.keys) {
            modules.name = params.name;
            modules.description = params.description;
            modules.months  =  params.months;
            modules.keys = params.keys;

            Module.findOne({ name: modules.name }, (err, found) => {
                if (found) {
                    res.status(200).send({ message: 'Ya existe el módulo' });
                } else {
                    modules.save((err, moduleSave) => {
                        if (err) {
                            res.status(500).send({ message: 'Error al guardar' });
                        } else {
                            if (!moduleSave) {
                                res.status(404).send({ message: 'No se pudo guardar' });
                            } else {
                                res.status(200).send({ module: moduleSave });
                            }
                        }
                    });
                }
            })
        } else {
            res.status(200).send({ message: 'Ingrese todos los campos' });
        }
    }
}

function listModule(req, res) {
    var stat = req.params.rol;

    Module.find({status: stat}, (err, found) => {
       if(err){
           res.status(200).send({message: 'Error al listar'});
       }else{
           if(!found){
               res.status(200).send({message: 'No se encontro nada'});
           }else{
               res.status(200).send({modules: found})
           }
       }
    });
}

function searchModuleId(req, res) {
    var moduleId = req.params.id;

    Module.findOne({ _id: moduleId }, (err, module) => {
        if (err) {
            res.status(404).send({ message: 'No se pudo listar' });
        } else {
            res.status(200).send({ module });
        }
    });
}

function searchModuleName(req, res) {
    var moduleId = req.params.id;

    Module.findOne({ name: moduleId }, (err, module) => {
        if (err) {
            res.status(404).send({ message: 'No se pudo listar' });
        } else {
            res.status(200).send({ module });
        }
    });
}

function updateModule(req, res) {
    var params = req.body;
    var moduleId = req.params.id;

    Module.findByIdAndUpdate(moduleId, params, { new: true }, (err, moduleUpdate) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar' });
        } else {
            if (!moduleUpdate) {
                res.status(404).send({ message: 'No se pudo actualizar' });
            } else {
                res.status(200).send({ moduleUpdate });
            }
        }
    });
}

function deleteModule(req, res) {
    var moduleId = req.params.id;

    Module.findByIdAndDelete(moduleId, (err, moduleDelete) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar' });
        } else {
            if (!moduleDelete) {
                res.status(404).send({ message: 'Error al eliminar' });
            } else {
                res.status(200).send({ message: 'Se elimino correctamente' });
            }

        }
    });
}
/********************************************** PROYECT **************************************************/
function saveProyect(req, res) {
    var params = req.body;
    var proyect = new Proyect();
    var rol = req.params.rol;

    if('COLLABORATOR' == rol || 'ADVISER' == rol){
        res.status(500).send({message: 'No tienes permiso'});
    }else{
        if (params._id && params.responsability && params.priorityDocument && params.priorityToday && params.company && params.country && params.module && params.dateRequest && params.dateStart && params.whoAskFor && params.percentageProgress && params.dateLimit && params.remainingDays && params.dateDelivery && params.effectiveDays && params.description && params.status) {
            proyect._id = params._id;
            proyect.responsability = params.responsability;
            proyect.priorityDocument = params.priorityDocument;
            proyect.priorityToday = params.priorityToday;
            proyect.company = params.company;
            proyect.country = params.country;
            proyect.module = params.module;
            proyect.dateRequest = params.dateRequest;
            proyect.dateStart = params.dateStart;
            proyect.whoAskFor = params.whoAskFor;
            proyect.percentageProgress = params.percentageProgress;
            proyect.dateLimit = params.dateLimit;
            proyect.remainingDays = params.remainingDays;
            proyect.dateDelivery = params.dateDelivery;
            proyect.effectiveDays = params.effectiveDays;
            proyect.description = params.description;
            proyect.status = params.status;
            proyect.countersStatus = params.status;
            proyect.save((err, proyectSave) => {
                if (err) {
                    res.status(200).send({ message: 'Error al guardar' });
                    console.log(err)
                } else {
                    if (!proyectSave) {
                        res.status(404).send({ message: 'No se pudo guardar' });
                    } else {
                        res.status(200).send({ proyect: proyectSave });
                    }
                }
            });
        } else {
            res.status(200).send({ message: 'Ingrese todos los campos' });
        }
    }
}

function listProyect(req, res) {
    Proyect.find((err, proyects) => {
        if (err) {
            res.status(404).send({ message: 'Error al listar' });
        } else {
            if(!proyects){
                res.status(200).send({ message: 'No se pudo listar' })
            }else{
                res.status(200).send(proyects);
            }
        }
    });
}

function searchProyect(req, res) {
    var proyectId = req.params.id;

    Proyect.find({ _id: proyectId }, (err, proyect) => {
        if (err) {
            res.status(404).send({ message: 'No se pudo listar' });
        } else {
            res.status(200).send(proyect);
        }
    });
}

function updateProyect(req, res) {
    var params = req.body;
    var proyectId = req.params.id;

    Proyect.findByIdAndUpdate(proyectId, params, { new: true }, (err, proyectUpdate) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar' });
        } else {
            if (!proyectUpdate) {
                res.status(404).send({ message: 'No se pudo actualizar' });
            } else {
                res.status(200).send({ proyectUpdate });
            }
        }
    });
}

function deleteProyect(req, res) {
    var proyectId = req.params.id;

    Proyect.findByIdAndDelete(proyectId, (err, proyectDelete) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar' });
        } else {
            res.status(200).send({ message: 'Se elimino correctamente' });
        }
    });
}

/*********************************************** SIMPLE TASK ***********************************************/
function saveSimpleTask(req, res) {
    var params = req.body;
    var simpleTask = new SimpleTask();
    var rol = req.params.rol;

    if ('ADVISER' == rol) {
        res.status(200).send({ message: 'No tienes permiso' });
    } else {
        if (params.type && params.description && params.priority && params.state && params.estimatedHours && params.dependences && params.planningDate && params.percent && params.comments && params.closedDate) {
            simpleTask.type = params.type;
            simpleTask.description = params.description;
            simpleTask.priority = params.priority;
            simpleTask.state = params.state;
            simpleTask.estimatedHours = params.estimatedHours;
            simpleTask.dependences = params.dependences;
            simpleTask.planningDate = params.planningDate;
            simpleTask.percent = params.percent;
            simpleTask.comments = params.comments;
            simpleTask.closedDate = params.closedDate;
            
            simpleTask.save((err, simpleTaskSave) => {
                if (err) {
                    res.status(500).send({ message: 'Error al guardar' });
                } else {
                    if (!simpleTaskSave) {
                        res.status(404).send({ message: 'No se pudo guardar' });
                    } else {
                        res.status(200).send({ simpleTask: simpleTaskSave });
                    }
                }
            });
        } else {
            res.status(200).send({ message: 'Ingrese todos los campos' });
        }
    }
}

function listSimpleTask(req, res) {

    SimpleTask.find((err, found) => {
       if(err){
           res.status(200).send({message: 'Error al listar'});
       }else{
           if(!found){
               res.status(200).send({message: 'No se encontro nada'});
           }else{
               res.status(200).send(found)
           }
       }
    });
}

function searchSimpleTask(req, res) {
    var simpleTaskId = req.params.id;

    SimpleTask.find({ _id: simpleTaskId }, (err, simpleTask) => {
        if (err) {
            res.status(404).send({ message: 'No se pudo listar' });
        } else {
            res.status(200).send(simpleTask);
        }
    });
}

function updateSimpleTask(req, res) {
    var params = req.body;
    var simpleTaskId = req.params.id;

    SimpleTask.findByIdAndUpdate(simpleTaskId, params, { new: true }, (err, simpleTaskUpdate) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar' });
        } else {
            if (!simpleTaskUpdate) {
                res.status(404).send({ message: 'No se pudo actualizar' });
            } else {
                res.status(200).send(simpleTaskUpdate);
            }
        }
    });
}

function deleteSimpleTask(req, res) {
    var simpleTaskId = req.params.id;

    SimpleTask.findByIdAndDelete(simpleTaskId, (err, simpleTaskDelete) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar' });
        } else {
            if (!simpleTaskDelete) {
                res.status(404).send({ message: 'Error al eliminar' });
            } else {
                res.status(200).send({ message: 'Se elimino correctamente' });
            }

        }
    });
}

module.exports = {
    saveCountry,
    listCountry,
    updateCountry,
    saveUser,
    updateUser,
    deleteUser,
    login,
    saveCompany,
    listCompany,
    searchCompany,
    updateCompany,
    deleteCompany,
    saveModule,
    listModule,
    searchModuleName,
    searchModuleId,
    updateModule,
    deleteModule,
    saveProyect,
    listProyect,
    searchProyect,
    updateProyect,
    deleteProyect,
    listUser,
    searchUser,
    saveSimpleTask,
    listSimpleTask,
    searchSimpleTask,
    updateSimpleTask,
    deleteSimpleTask
}