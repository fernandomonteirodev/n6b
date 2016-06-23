// Some data for the demo.

// We are going to use the same data source for multiple tracks
var bamSource = pileup.formats.bam({
  url: '/data/synth3.normal.17.7500000-7515000.bam',
  indexUrl: '/data/synth3.normal.17.7500000-7515000.bam.bai'
});

var sources = [
  {
    viz: pileup.viz.genome(),
    isReference: true,
    data: pileup.formats.twoBit({
      url: 'data/hg19.2bit'
    }),
    name: 'Reference'
  },
  {
    viz: pileup.viz.scale(),
    name: 'Scale'
  },
  {
    viz: pileup.viz.location(),
    name: 'Location'
  },
  {
    viz: pileup.viz.variants(),
    data: pileup.formats.vcf({
      url: '/data/snv.chr17.vcf'
    }),
    name: 'Variants'
  },
  {
    viz: pileup.viz.genes(),
    data: pileup.formats.bigBed({
      url: 'data/ensGene.bb'
    }),
    name: 'Genes'
  },
  {
    viz: pileup.viz.coverage(),
    data: bamSource,
    cssClass: 'normal',
    name: 'Coverage'
  },
  {
    viz: pileup.viz.pileup(),
    data: bamSource,
    cssClass: 'normal',
    name: 'Alignments'
  },
  {
    viz: pileup.viz.coverage(),
    data: bamSource,
    cssClass: 'tumor',
    name: 'Coverage'
  },
  {
    viz: pileup.viz.pileup({
      viewAsPairs: true
    }),
    data: bamSource,
    cssClass: 'tumor',
    name: 'Alignments'
  }
];

var range = {contig: 'chr17', start: 7512284, stop: 7512644};
