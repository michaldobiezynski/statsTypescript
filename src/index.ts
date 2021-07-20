import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

const summary1 = new Summary(new WinsAnalysis("Man United"), new HtmlReport());

summary1.buildAndPrintReport(matchReader.matches);
