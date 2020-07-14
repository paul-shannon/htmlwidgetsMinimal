quick:	roxy install

roxy:
	R -e "devtools::document()"

install:
	R CMD INSTALL --no-test-load .


