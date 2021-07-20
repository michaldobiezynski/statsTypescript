import { Summary } from "./Summary";
import { MatchReader } from "./MatchReader";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary1 = Summary.winsAnalysisWithHtmlReport("Man United");
summary1.buildAndPrintReport(matchReader.matches);
