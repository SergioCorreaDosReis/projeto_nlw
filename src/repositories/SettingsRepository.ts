import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

// extende pega os metodos de uma classe para outra classe     
// ([classe] para esssa <== dessa [classe])
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting>{}
 
export { SettingsRepository }